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
bonusText.style.fontFamily = 'Verdana';
bonusText.style.color = 'mediumBlue';
bonusText.style.textAlign = 'center';









// // Alternative code: -------//

// //Declare constants for the individual buttons:
// const stopBtn = get('#stopButton');
// const slowBtn = get('#slowButton');
// const goBtn = get('#goButton');

// //Declare constants for the individual lights/bulbs:
// const redLight = get('#stopLight');
// const yellowLight = get('#slowLight');
// const greenLight = get('#goLight');

// // Declare variable for bonus text:
// const redText = get('#stopLight');
// const yellowText = get('#slowLight');
// const greenText = get('#goLight');

//Reset color function
// function resetLights() {
//   redLight.style.backgroundColor = 'black';
  // yellowLight.style.backgroundColor = 'black';
  // greenLight.style.backgroundColor = 'black';
// };

// //Declare the event listener for red button
// stopBtn.addEventListener('click', () => {
//   resetLights()
//   redLight.style.backgroundColor = '#F00';
//   redText.appendChild(bonusText);
// });

// //Declare the event listener for yellow button
// slowBtn.addEventListener('click', () => {
//   resetLights()
//   yellowLight.style.backgroundColor = '#fcba03';
//   yellowText.appendChild(bonusText);
// });

// //Declare the event listener for green button
// goBtn.addEventListener('click', () => {
//   resetLights()
//   greenLight.style.backgroundColor = '#0f0';
//   greenText.appendChild(bonusText);
// });





