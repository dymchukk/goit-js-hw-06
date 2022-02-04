/*Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.*/






function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let initialSizeOfBox = 30;
const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxesParent: document.querySelector('#boxes'),
  inputEl: document.querySelector('#controls').firstElementChild,
};
refs.createBtn.addEventListener('click', createBtnListener);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBtnListener() {
  const amountOfBoxes = createBoxes(refs.inputEl.value);
  refs.boxesParent.append(...amountOfBoxes);
}

function createBoxes(amount) {
  let sizeOfBox = 0;
  const boxElements = [];
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.display = 'block';
    sizeOfBox = initialSizeOfBox + i * 10;
    boxEl.style.width = `${sizeOfBox}px`;
    boxEl.style.height = `${sizeOfBox}px`;
    boxElements.push(boxEl);
  }
  initialSizeOfBox = sizeOfBox + 10;
  return boxElements;
}

function destroyBoxes() {
  refs.boxesParent.innerHTML = '';
  initialSizeOfBox = 30;
}