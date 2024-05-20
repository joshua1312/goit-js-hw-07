function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const inputField = document.querySelector('#controls input');
const divTags = document.querySelector("#boxes");

createBtn.addEventListener("click", (event) => {
  let amount = inputField.value;
  if (amount > 0 && amount <= 100) createBoxes(amount);
}
);
destroyBtn.addEventListener("click", (event) => { destroyBoxes() });

function createBoxes(quantity) {
  destroyBoxes();
  const markup = [];
  for (let index = 0; index < quantity; index++) {
    const square = document.createElement('div');
    const AxB = 30 + index * 10;
    square.style.height = `${AxB}px`;
    square.style.backgroundColor = getRandomHexColor();
    square.style.width = `${AxB}px`;
    markup.push(square);
  }
  divTags.append(...markup);
  inputField.value = "";
}

function destroyBoxes() {
  divTags.innerHTML = "";
}