
let darkBody = document.querySelector(".dark");
let darkTitle = document.querySelector("h1");
let darkItem = document.querySelectorAll(".item");


function changeMode() {
    darkBody.classList.toggle("dark-body")
    darkTitle.classList.toggle("dark-title")
    for (let index = 0; index < darkItem.length; index++) {
        darkItem[index].classList.toggle("item-dark")
    }
    
    
}
