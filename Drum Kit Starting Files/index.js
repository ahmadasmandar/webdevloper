var buttonArray = document.querySelectorAll("button");
var audio = new Audio("sounds/crash.mp3");
for (i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", testFunc);
}
function testFunc() {
    console.log(this.innerHTML);
}
// console.log(buttonArray);