const {backgroundEl, changeBtnEl, colorEl} = {
  backgroundEl: document.querySelector(`.widget`),
  changeBtnEl: document.querySelector(`[type="button"]`),
  colorEl: document.querySelector(`.color`)
}

changeBtnEl.addEventListener(`click`, onChangeColor);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColor() {
  backgroundEl.style.backgroundColor = getRandomHexColor(); //set background color
  colorEl.textContent = getRandomHexColor(); //set value for span element
};