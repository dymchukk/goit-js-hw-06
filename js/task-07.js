// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.*/

{
  /* <input id="font-size-control" type="range" /> */
}
{
  /* <br />
<span id="text">Abracadabra!</span> */
}

const textEl = document.querySelector("#text");

const inputEl = document.querySelector("#font-size-control");

inputEl.addEventListener("input", (elem) => {
  const size = inputEl.value;
  // console.log(size);

  textEl.style.fontSize = size + "px";
});