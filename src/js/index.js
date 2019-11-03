const array = [
	{ name: 'item 1', index: 0 },
	{ name: 'item 2', index: 1 },
	{ name: 'item 3', index: 2 },
	{ name: 'item 4', index: 3 },
	{ name: 'item 5', index: 4 },
	{ name: 'item 6', index: 5 }
];

const list = document.querySelector('.list');
const delay = 1
// 1. отрендерить весь список
function initial(array) {
  array.map((item, index) => renderItem(item, index));
  const item = document.querySelector('.item');
  item.style.transition = "all " + delay + "s"
  
  addClasses(1, 2)
}
// 2. показать 4 элемента - css
// 3. подвинуть элементы на 130пикс влево

function hideItem(item) {
	item.innerHTML = '';
	item.style.width = 0;
	item.style.margin = 0;
	item.style.padding = 0;
  item.style.border = 'none';
}

function removeAndAdd(item) {
	setTimeout(() => {
		item.parentElement.removeChild(item);
		const index = parseInt(item.dataset.index);
		renderItem(array[index], index);
	}, delay*1000);
}

function addTransition(){
  const item = document.querySelector('.item');
  item.style.transition = "all " + delay + "s"
}

function addClasses(start, end){
  const items = document.querySelectorAll('.item');
  for(let i = 0; i < items.length; i++){
    if(i < start || i > end){
      items[i].classList.add('gray')
    }else{
      // console.log(items[i])
      items[i].classList.remove('gray')
    }
  }
}

// 4. удалить первый элемент
function removeItem() {
  const items = Array.from(document.querySelectorAll('.item'));
  const item = items[0];
  addTransition()
  hideItem(item);
  addClasses(2, 3)
	removeAndAdd(item);
}

// запустить слайдер
function moveSlider() {
	removeItem();
}

function renderItem(item) {
	const markup = `
  <li class="item" data-index="${item.index}">    
    <div class="img"></div> 
    ${item.name}
  </li>
  `;
	list.insertAdjacentHTML('beforeend', markup);
}

window.addEventListener('load', () => {
	initial(array);
	setInterval(() => {
		moveSlider();
	}, 2000);
	// setTimeout(() => {
	// 	moveSlider();
	// }, 2000);
});

