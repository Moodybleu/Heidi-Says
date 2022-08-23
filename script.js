let humanSequence = [];
let levelStart = 0 
let intervalID = [];
let flash;
let compTurn;
let noise = true
let win;


const sequence = ['Red', 'Green', 'Blue', 'Purple'];
const startButton = document.querySelector('#GameStart')
const Red = document.querySelector('#Red')
const Blue = document.querySelector('#Blue')
const Green = document.querySelector('#Green')
const Purple = document.querySelector('#Purple')
const turnCounter = document.querySelector('#turn')

startButton.addEventListener('click', (event) => {
  if (startButton.clicked === true) {
    on = true;
    turnCounter.innerHTML = '-';
  } else {
    on = false;
    turnCounter.innerHTML = '';
    clearColor(); 
    clearInterval();
  }
})

function playGame() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalID = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  for (var i = 0; i < 20; i++) {
    order.push(math.floor(math.random() * 4) + 1);
  }
  compTurn = true;

  intervalID = setInterval(gameTurn, 800);
}


function gameTurn() {
  on = false;

  if(flash === turn ) {
    clearInterval(intervalID);
    compTurn = false;
    clearColor();
    on = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if(order[flash] === 1) one();
      if(order[flash] === 2) two();
      if(order[flash] === 3) three();
      if(order[flash] === 4) four();
      flash++;
    }, 200);
  }
}

function one() {
  if (noise) {
    let audio = document.getElementById("clip1");
    audio.play();
  }
  noise = true;
  Red.style.backgroundColor = "tomato";
}

function two() {
  if (noise) {
    let audio = document.getElementById("clip2");
    audio.play();
  }
  noise = true;
  Green.style.backgroundColor = "lightgreen";
}

function three() {
  if (noise) {
    let audio = document.getElementById("clip3");
    audio.play();
  }
  noise = true;
  Blue.style.backgroundColor = "lightblue";
}

function four() {
  if (noise) {
    let audio = document.getElementById("clip4");
    audio.play();
  }
  noise = true;
  Purple.style.backgroundColor = "lightpurple";
}


// Start game button ✅
// Generate random sequence of four item array ✅
// Timeout function inside "forEach" ✅
// Display text for player -- 'Your turn!'
// Start player turn
// Make colors clickable after computer turn
// Allow only four clicks for first round and record into array 
// Use a boolean to compare the two arrays 