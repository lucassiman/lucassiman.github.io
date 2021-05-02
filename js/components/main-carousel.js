
const btnRight = document.querySelector(".button-arrow.-right");
const btnLeft = document.querySelector(".button-arrow.-left");
const elements = document.querySelector(".elements");
var pixels = 0;

btnRight.addEventListener("click",function() {
    elements.style = `transform: translateX(${pixels=pixels+10}px)`
});

btnLeft.addEventListener("click",() => {
    elements.style = `transform: translateX(${pixels=pixels-10}px)`
});