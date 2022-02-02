/* Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
 Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
 Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
 Для добавления стилей, используй CSS-классы valid и invalid.*/





let inputEl = document.querySelector('#validation-input');

let inputLength = inputEl.dataset.length;

const input = document.querySelector('input');
inputEl.addEventListener('blur', elem => {
  const text = elem.target.value;

  if (text.length === +inputLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});