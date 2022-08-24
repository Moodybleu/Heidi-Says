let humanSequence = [];
let order = [];
let levelStart = 0 
let intervalID;
let flash;
let compTurn;
let noise = true;
let on = true;
let win;


// const sequence = ['Red', 'Green', 'Blue', 'Purple'];
const onButton = document.querySelector('#on')
const hardMode = document.querySelector('#hardMode')
const startButton = document.querySelector('#GameStart')
const Red = document.querySelector('#Red')
const Blue = document.querySelector('#Blue')
const Green = document.querySelector('#Green')
const Purple = document.querySelector('#Purple')
const turnCounter = document.querySelector('#turn')

hardMode.addEventListener('click', (event) => {
  if (hardMode.checked == true) {
    hardMode = true;
  } else {
    hardMode = false;
  }
});

onButton.addEventListener('click', (event) => {
  if (onButton.checked == true) {
    on = true;
    turnCounter.innerHTML = "0";
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
  for (let i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;

  intervalID = setInterval(gameTurn, 800);
}

startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
})

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
  Purple.style.backgroundColor = "#CD14EB";
}

function clearColor() {
  Red.style.backgroundColor = "darkred"
  Green.style.backgroundColor = "darkgreen"
  Blue.style.backgroundColor = "darkblue"
  Purple.style.backgroundColor = "#820d94"
}

function flashColor() {
Red.style.backgroundColor = "lightred";
Green.style.backgroundColor = "lightgreen";
Blue.style.backgroundColor = "lightblue";
Purple.style.backgroundColor = "lightpurple";
}

Red.addEventListener('click', (event) => {
  if (on) {
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
  if (on) {
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
  if (on) {
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
  if (on) {
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

  if (humanSequence.length == 3 && good) {
    winGame();
  }

  if (good == false) {
    flashColor();
    turnCounter.innerHTML = "Uh oh! You guessed it wrong!";
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor();

      if (hardMode) {
        play();
      } else {
        compTurn = true;
        flash = 0;
        humanSequence = [];
        good = true;
        intervalId = setInterval(gameTurn, 800);
      }
    }, 800);

    noise = false;
  }

  if (turn == humanSequence.length && good && !win) {
    turn++;
    humanSequence = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = turn;
    intervalId = setInterval(gameTurn, 800);
  }

}

function winGame() {
  flashColor();
  turnCounter.innerHTML = "Heidi is pleased with her humans smarts";
  on = false;
  win = true;
}


// Start game button ✅
// Generate random sequence of four item array ✅
// Timeout function inside "forEach" ✅
// Display text for player -- 'Your turn!'
// Start player turn ✅
// Make colors clickable after computer turn ✅
