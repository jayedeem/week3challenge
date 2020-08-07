/* Tooltip J Query */
$(function () {
  $(`[data-toggle='tooltip']`).tooltip();
});


const text = document.getElementsByClassName('whiteText');
const navBar = document.getElementsByClassName('navbar')
const gradient = 'linear-gradient(to right, #5637dd, #3046c5, #60106b)'

const storage = localStorage.getItem("darkSwitch")

const darkMode = () => document
  .getElementById('darkSwitch')
  .addEventListener('change', () => {
    const text = document.getElementsByClassName('whiteText');
    const navBar = document.querySelector('.navbar')
    
    return {
      first: navBar.style.background = gradient,
      second: Array.from(text).forEach((el) => (el.style.color = 'black'))
    }
  });


function isDark(){
  if(storage === 'dark') {
    const text = document.getElementsByClassName('whiteText');
      const navBar = document.querySelector('.navbar')
      
      return {
        first: navBar.style.background = gradient,
        second: Array.from(text).forEach((el) => (el.style.color = 'black'))
      }
  } else {
    darkMode()
  }
}

isDark()