let humanSequence = [];
let order = [];
let levelStart = 0 
let intervalID;
let flash;
let compTurn;
let noise = true;
let on = true;
let win;


const sequence = ['Red', 'Green', 'Blue', 'Purple'];
const onButton = document.querySelector('#on')
const startButton = document.querySelector('#GameStart')
const Red = document.querySelector('#Red')
const Blue = document.querySelector('#Blue')
const Green = document.querySelector('#Green')
const Purple = document.querySelector('#Purple')
const turnCounter = document.querySelector('#turn')

onButton.addEventListener('click', (event) => {
  if (onButton.checked === true) {
    on = true;
    turnCounter.innerHTML = "-";
  } else {
    on = false;
    turnCounter.innerHTML = "";
    clearColor();
    clearInterval(intervalId);
  }
});

startButton.addEventListener('click', (event) => {
  if (on || win) {
    playGame();
  }
});

function playGame() {
  win = false;
  order = [];
  humanSequence = [];
  flash = 0;
  intervalID = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  for (let i = 0; i < 10; i++) {
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
    let audio = document.getElementById("RedSound");
    audio.play();
  }
  noise = true;
  Red.style.backgroundColor = "#ff0000";
}

function two() {
  if (noise) {
    let audio = document.getElementById("GreenSound");
    audio.play();
  }
  noise = true;
  Green.style.backgroundColor = "#03d931";
}

function three() {
  if (noise) {
    let audio = document.getElementById("BlueSound");
    audio.play();
  }
  noise = true;
  Blue.style.backgroundColor = "#1f36ff";
}

function four() {
  if (noise) {
    let audio = document.getElementById("PurpleSound");
    audio.play();
  }
  noise = true;
  Purple.style.backgroundColor = "CD14EB";
}

function clearColor() {
  Red.style.backgroundColor = "darkred"
  Green.style.backgroundColor = "darkgreen"
  Blue.style.backgroundColor = "darkblue"
  Purple.style.backgroundColor = "darkpurple"
}

function flashColor() {
Red.style.backgroundColor = "";
Green.style.backgroundColor = "";
Blue.style.backgroundColor = "";
Purple.style.backgroundColor = "";
}

Red.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(1);
    check();
    one();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})
Green.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(2);
    check();
    two();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})
Blue.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(3);
    check();
    three();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})
Purple.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(4);
    check();
    four();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

// Start game button ✅
// Generate random sequence of four item array ✅
// Timeout function inside "forEach" ✅
// Display text for player -- 'Your turn!'
// Start player turn
// Make colors clickable after computer turn
// Allow only four clicks for first round and record into array 
// Use a boolean to compare the two arrays 