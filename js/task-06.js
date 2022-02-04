/* Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
 Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
 Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
 Для добавления стилей, используй CSS-классы valid и invalid.*/





const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputChange);

function onInputChange () {
    if (inputEl.value.length === Number(inputEl.dataset.length)){
        this.classList.add('valid'); 
        this.classList.remove('invalid'); 
    } else {
        this.classList.remove('valid');
        this.classList.add('invalid'); 
    }
};