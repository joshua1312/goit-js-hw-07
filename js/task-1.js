const elemToCon = document.querySelectorAll(".item");
console.log(`Number of categories: ${elemToCon.length}`);
const dim_text = elemToCon.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.innerText}`);
    console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});


