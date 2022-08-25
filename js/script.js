let humanSequence = [];
let order = ['Red', 'Green', 'Blue', 'Purple'];
let intervalID;
let flash;
let compTurn;
let noise = true;
let on = true;
let win;


const hardMode = document.querySelector('#hardMode')
const onButton = document.querySelector('#on')
const startButton = document.querySelector('#GameStart')
const resetButton = document.querySelector('#Reset')
const Red = document.querySelector('#Red')
const Blue = document.querySelector('#Blue')
const Green = document.querySelector('#Green')
const Purple = document.querySelector('#Purple')
const turnCounter = document.querySelector('#turn')

// sets up hard mode.
hardMode.addEventListener('click', (event) => {
  if (hardMode.checked == true) {
    hardMode = true;
  } else {
    hardMode = false;
  }
});

// Power button
onButton.addEventListener('click', (event) => {
  if (onButton.checked == true) {
    on = true;
    turnCounter.innerHTML = "0";
  } else {
    on = false;
    turnCounter.innerHTML = "";
    clearColor();
    clearInterval(intervalID);
  }
});
//  once the power button has been toggled the start button can be clicked
startButton.addEventListener('click', (event) => {
  if (on || win) {
    playGame();
  } else {
    playGame = false
  }
});
// Start button disappears after click
// startButton.addEventListener('click', () => {
//   startButton.style.display = 'none';
// })

resetButton.addEventListener('click', (event) => {
  if (on) {
    resetGame();
    playGame()
  } 
});

// Defines what happens when the game is started
function playGame() {
  win = false;
  order = [];
  humanSequence = [];
  flash = 0;
  intervalID = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  for (let i = 0; i < 12; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;
  intervalID = setInterval(gameTurn, 900);
}
// Red tile Sound
function one() {
  if (noise) {
    let audio = document.getElementById('RedSound');
    audio.play();
  }
  noise = true;
  Red.style.backgroundColor = '#ff0000';
}
// Green tile Sound
function two() {
  if (noise) {
    let audio = document.getElementById('GreenSound');
    audio.play();
  }
  noise = true;
  Green.style.backgroundColor = '#03d931';
}
// Blue tile Sound
function three() {
  if (noise) {
    let audio = document.getElementById('BlueSound');
    audio.play();
  }
  noise = true;
  Blue.style.backgroundColor = '#1f36ff';
}
// Purple tile Sound
function four() {
  if (noise) {
    let audio = document.getElementById('PurpleSound');
    audio.play();
  }
  noise = true;
  Purple.style.backgroundColor = '#CD14EB';
}
// Defines what happens when it's the computers turn
function gameTurn() {
  on = false;

  if(flash == turn) {
    clearInterval(intervalID);
    compTurn = false;
    clearColor();
    on = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if(order[flash] == 1) one();
      if(order[flash] == 2) two();
      if(order[flash] == 3) three();
      if(order[flash] == 4) four();
      flash++;
    }, 400);
  }
}

// Defines clearColor Function
function clearColor() {
  Red.style.backgroundColor = 'white'
  Green.style.backgroundColor = 'white'
  Blue.style.backgroundColor = 'white'
  Purple.style.backgroundColor = 'white'
}
// Defines flashColor Function
function flashColor() {
Red.style.backgroundColor = 'lightred';
Green.style.backgroundColor = 'lightgreen';
Blue.style.backgroundColor = 'lightblue';
Purple.style.backgroundColor = 'lightpurple';
}

function resetGame() {
Red.style.backgroundColor = '#ff0000';
Blue.style.backgroundColor = '#1f36ff';
Green.style.backgroundColor = '#03d931';
Purple.style.backgroundColor = '#aa11c2';
}

Red.addEventListener('click', (event) => {
  if (on && GameStart) {
    humanSequence.push(1);
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
  if (on && GameStart) {
    humanSequence.push(2);
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
  if (on && GameStart) { // requires On and GameStart to be activated
    humanSequence.push(3);
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
  if (on && GameStart) {
    humanSequence.push(4);
    check();
    four();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

function check() {
  if (humanSequence[humanSequence.length - 1] !== order[humanSequence.length - 1])
    good = false;

  if (humanSequence.length == 12 && good) {
    winGame();
  }

  if (good == false) {
    flashColor();
    turnCounter.innerHTML = 'Guess again!';
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor();

      if (hardMode) {
        playGame();
      } else {
        compTurn = true;
        flash = 0;
        humanSequence = [];
        good = true;
        intervalID = setInterval(gameTurn, 900);
      }
    }, 900);

    noise = false;
  }

  if (turn == humanSequence.length && good && !win) {
    turn++;
    humanSequence = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = turn;
    intervalID = setInterval(gameTurn, 900);
  }

}

function winGame() {
  flashColor();
  turnCounter.innerHTML = 'You won!';
  on = false;
  win = true;
}

function loseGame () {
  clearColor();
  turnCounter.innerHTML = 'Heidi lost her patience and taken her Tennis balls back';
  on = false;
  good = false;
  win = false;
  if (loseGame) {
    let audio = document.getElementById('StolenBall');
    audio.play();
  }
  noise = true;
  

}


// Start game button ✅
// Generate random sequence of four item array ✅
// Display text for player -- level counter ✅
// Start player turn ✅
// Make colors clickable after computer turn ✅
