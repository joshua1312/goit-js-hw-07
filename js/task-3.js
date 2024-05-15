const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    let nameString = event.currentTarget.value.trim();
    if (nameString !== "") output.textContent = nameString; else output.textContent = "Anonymous";
});