let sequence = ['Red', 'Green', 'Blue', 'Purple'];
let humanSequence = [];

let level = 0 
function nextRound () {
  level += 1;

  const nextSequence = [];
}

const startButton = document.querySelector('#GameStart')
const Red = document.querySelector('#Red')
const Blue = document.querySelector('#Blue')
const Green = document.querySelector('#Green')
const Purple = document.querySelector('#Purple')

function startGame () {
  startButton.classList.add('hidden');
  // info.classList.remove('hidden');
  // info.textContent = 'Wait for the computer'
  alert('Game has started')
  shuffle(sequence)
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  console.log(array)
}
function playGame () {
  startButton.addEventListener('click', startGame)
  
}

playGame()
// Start game button
// Generate random sequence of four item array
// Timeout function inside "for each"
// Display text for player
// Start player turn
// Make buttons clickable
// Allow only four clicks for first round and record into array 
//  Using a boolean to compare the two arrays 