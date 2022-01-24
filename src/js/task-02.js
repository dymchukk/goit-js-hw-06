const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.createElement('li');

listEl.textContent = 'Garlic';
listEl.classList.add('item');


const ulEl = document.querySelector('ul')
ulEl.appendChild(listEl)

console.log('listEl', listEl);