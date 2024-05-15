function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("button", changeColorHandle);
const outputTextColor = document.querySelector(".color");
const outputBody = document.querySelector("body");
function changeColorHandle(event) {
  outputTextColor.textContent = event.getRandomHexColor;
}