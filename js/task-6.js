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

function createBoxes(amount) {
  destroyBoxes();
  let markup = "";
  for (let index = 0; index < amount; index++) {
    markup += `<div class="div-item"></div>`;
  }
  divTags.insertAdjacentHTML("afterbegin", markup);
}

function destroyBoxes() {
  divTags.innerHTML = "";
}