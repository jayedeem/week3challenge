/* Tooltip J Query */
$(function () {
  $(`[data-toggle='tooltip']`).tooltip();
});

const textElement = document.getElementsByClassName("whiteText");
const navElement = document.getElementsByClassName("navbar");
const gradientChange = "linear-gradient(to right, #5637dd, #3046c5, #60106b)";
const dark = document.getElementById("darkSwitch");
const storage = localStorage.getItem("darkSwitch");

inDarkModeInit(storage, textElement,navElement,gradientChange)

function changedMe(text, navBar, gradient){
  return {
    first: Array.from(navBar).forEach(el => el.style.background = gradient),
    second: Array.from(text).forEach(el => el.style.color = 'black')

  }
}


function inDarkModeInit(storage, text, nav, gradient){
  if(!storage === 'dark') {
    dark.addEventListener('change', changedMe(text, nav, gradient))
  } else {
    changedMe(text, nav, gradient)
  }
}




