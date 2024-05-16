function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let backColorBody;
const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click", changeColorHandle);
const outputTextColor = document.querySelector(".color");
const outputBody = document.querySelector("body");
function changeColorHandle(event) {
  event.preventDefault();
  backColorBody = getRandomHexColor();
  outputTextColor.textContent = backColorBody;
  outputBody.style.background = backColorBody;
}