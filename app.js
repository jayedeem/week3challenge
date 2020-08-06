/* Tooltip J Query */
$(function () {
  $(`[data-toggle='tooltip']`).tooltip();
});

const darkMode = document
  .getElementById('darkSwitch')
  .addEventListener('change', () => {
    const text = document.getElementsByClassName('whiteText');
    const bsImg = document.getElementById('bootStrapImg');
    bsImg.style = {
      background: '#111',
    };
    Array.from(text).forEach((el) => (el.style.color = 'black'));
  });

// const darkMode = document
// .getElementById('darkSwitch')
// .addEventListener('change', () => {
//   const text = document.getElementsByClassName('whiteText');
//   const style = document.createElement('style');

//   Array.from(text).forEach((el) => (el.style.color = 'black'));
// });
