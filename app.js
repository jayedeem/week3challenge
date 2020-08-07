/* Tooltip J Query */
$(function () {
  $(`[data-toggle='tooltip']`).tooltip();
});

const textElement = document.getElementsByClassName("whiteText");
const navElement = document.getElementsByClassName("navbar");
const gradient = "linear-gradient(to right, #5637dd, #3046c5, #60106b)";
const dark = document.getElementById("darkSwitch");
const storage = localStorage.getItem("darkSwitch");

dark.addEventListener('change', changedMe(textElement, navElement, gradient))

function changedMe(text, navBar, grad){
  return {
    first: Array.from(navBar).forEach(el => el.style.background = grad),
    second: Array.from(text).forEach(el => el.style.color = 'black')

  }
}





