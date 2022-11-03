//Define a selector function:
function get(selector) {
  return document.querySelector(selector);
};

// Declare arrays for buttons and bulbs and colors:
const buttonArr = document.querySelectorAll('.button');
const bulbArr = document.querySelectorAll('.bulb');
const colorArr = ['#F00', '#fcba03', '#0f0'];

// Write loop for event listener:
for(let i = 0; i < buttonArr.length; i++) {
  //Declare the event listener for each button
  buttonArr[i].addEventListener('click', () => {
    // First, reset all lights with a nested for loop:
    for(let j = 0; j < bulbArr.length; j++) {
      bulbArr[j].style.backgroundColor = 'black';
    }
    // Then give correct color:
    bulbArr[i].style.backgroundColor = colorArr[i];
    // Add the bonus text:
    bulbArr[i].appendChild(bonusText);
});
};

// Add a sneaky bonus text to the lights
const bonusText = document.createElement('p');

bonusText.innerText = "Huzzah!"
bonusText.style.fontSize = '35px';
bonusText.style.fontFamily = 'sans-serif';
bonusText.style.color = 'mediumBlue';
bonusText.style.padding = '10px';
