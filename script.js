const sequence = ['Red', 'Green', 'Blue', 'Purple'];
let humanSequence = [];

let level = 0 

function nextRound () {
  level += 1;
}

const startButton = document.querySelector('#GameStart')
const Red = document.querySelector('#Red')
const Blue = document.querySelector('#Blue')
const Green = document.querySelector('#Green')
const Purple = document.querySelector('#Purple')


function startGame () {
  startButton.classList.add('hidden');
  sequence.forEach(function(color) {
    setTimeout(color, 2000)
    
  });
  console.log("The delay for color is working!")
  alert('Game has started')
  shuffle(sequence)
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  console.log(array)
}
function playGame () {
  startButton.addEventListener('click', startGame)
  let playerTurn = 
}

playGame()
// Start game button ✅
// Generate random sequence of four item array ✅
// Timeout function inside "forEach" ✅
// Display text for player -- 'Your turn!'
// Start player turn
// Make colors clickable
// Allow only four clicks for first round and record into array 
// Use a boolean to compare the two arrays 