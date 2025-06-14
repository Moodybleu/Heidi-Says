let humanSequence = [];
let order = [];
let intervalID;
let flash = 0;
let compTurn = false;
let noise = true;
let on = false;
let win = false;
let turn = 1;
let good = true;
let GameStart = false;
let isHardMode = false;
let isClickLocked = false;

const hardMode = document.querySelector('#hardMode');
const onButton = document.querySelector('#on');
const startButton = document.querySelector('#GameStart');
const resetButton = document.querySelector('#Reset');
const Red = document.querySelector('#Red');
const Blue = document.querySelector('#Blue');
const Green = document.querySelector('#Green');
const Purple = document.querySelector('#Purple');
const turnCounter = document.querySelector('#turn');

// Debug DOM access
if (!hardMode || !onButton || !startButton || !resetButton || !Red || !Green || !Blue || !Purple || !turnCounter) {
    console.error('One or more required elements not found:', {
        hardMode, onButton, startButton, resetButton, Red, Green, Blue, Purple, turnCounter
    });
}

hardMode.addEventListener('click', () => {
    isHardMode = hardMode.checked;
    console.log('Hard mode toggled:', isHardMode);
});

onButton.addEventListener('click', () => {
    if (onButton.checked) {
        on = true;
        turnCounter.innerHTML = "0";
        startButton.style.display = 'inline-block';
        console.log('Power turned on');
    } else {
        on = false;
        GameStart = false;
        turnCounter.innerHTML = "";
        clearColor();
        clearInterval(intervalID);
        startButton.style.display = 'inline-block';
        console.log('Power turned off');
    }
});

startButton.addEventListener('click', () => {
    console.log('Start button clicked, on:', on, 'GameStart:', GameStart);
    if (on && !GameStart) {
        playGame();
        startButton.style.display = 'none';
        console.log('Game starting');
    } else {
        console.log('Game start blocked: on=', on, 'GameStart=', GameStart);
    }
});

resetButton.addEventListener('click', () => {
    if (on) {
        resetGame();
        resetHealthBar(); // Call new function to reset health bar
        playGame();
        console.log('Reset button clicked');
    }
});

// New function to reset health bar
function resetHealthBar() {
    healthPoint = 3; // Reset health points
    const healthBar = document.getElementById('HealthBar');
    if (healthBar) {
        healthBar.style.width = '15vw'; // Match initial CSS width
        console.log('Health bar reset to full');
    } else {
        console.error('HealthBar element not found');
    }
}

Red.addEventListener('click', () => {
    if (on && GameStart && !isClickLocked) {
        console.log('Red clicked');
        isClickLocked = true;
        humanSequence.push(1);
        check();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
                isClickLocked = false;
            }, 300);
        } else {
            isClickLocked = false;
        }
    }
});

Green.addEventListener('click', () => {
    if (on && GameStart && !isClickLocked) {
        console.log('Green clicked');
        isClickLocked = true;
        humanSequence.push(2);
        check();
        two();
        if (!win) {
            setTimeout(() => {
                clearColor();
                isClickLocked = false;
            }, 300);
        } else {
            isClickLocked = false;
        }
    }
});

Blue.addEventListener('click', () => {
    if (on && GameStart && !isClickLocked) {
        console.log('Blue clicked');
        isClickLocked = true;
        humanSequence.push(3);
        check();
        three();
        if (!win) {
            setTimeout(() => {
                clearColor();
                isClickLocked = false;
            }, 300);
        } else {
            isClickLocked = false;
        }
    }
});

Purple.addEventListener('click', () => {
    if (on && GameStart && !isClickLocked) {
        console.log('Purple clicked');
        isClickLocked = true;
        humanSequence.push(4);
        check();
        four();
        if (!win) {
            setTimeout(() => {
                clearColor();
                isClickLocked = false;
            }, 300);
        } else {
            isClickLocked = false;
        }
    }
});

function one() {
    console.log('Flashing Red');
    if (noise) {
        let audio = document.getElementById('RedSound');
        audio.play().catch(e => console.error('RedSound play error:', e));
    }
    noise = true;
    Red.classList.remove('tile-inactive');
    Red.classList.add('tile-active');
}

function two() {
    console.log('Flashing Green');
    if (noise) {
        let audio = document.getElementById('GreenSound');
        audio.play().catch(e => console.error('GreenSound play error:', e));
    }
    noise = true;
    Green.classList.remove('tile-inactive');
    Green.classList.add('tile-active');
}

function three() {
    console.log('Flashing Blue');
    if (noise) {
        let audio = document.getElementById('BlueSound');
        audio.play().catch(e => console.error('BlueSound play error:', e));
    }
    noise = true;
    Blue.classList.remove('tile-inactive');
    Blue.classList.add('tile-active');
}

function four() {
    console.log('Flashing Purple');
    if (noise) {
        let audio = document.getElementById('PurpleSound');
        audio.play().catch(e => console.error('PurpleSound play error:', e));
    }
    noise = true;
    Purple.classList.remove('tile-inactive');
    Purple.classList.add('tile-active');
}

function clearColor() {
    console.log('Clearing colors');
    Red.classList.remove('tile-active');
    Green.classList.remove('tile-active');
    Blue.classList.remove('tile-active');
    Purple.classList.remove('tile-active');
    Red.classList.add('tile-inactive');
    Green.classList.add('tile-inactive');
    Blue.classList.add('tile-inactive');
    Purple.classList.add('tile-inactive');
}

function flashColor() {
    console.log('Flashing all tiles');
    Red.classList.remove('tile-inactive');
    Green.classList.remove('tile-inactive');
    Blue.classList.remove('tile-inactive');
    Purple.classList.remove('tile-inactive');
    Red.classList.add('tile-active');
    Green.classList.add('tile-active');
    Blue.classList.add('tile-active');
    Purple.classList.add('tile-active');
}

function resetGame() {
    console.log('Resetting game');
    order = [];
    humanSequence = [];
    flash = 0;
    intervalID = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    compTurn = true;
    GameStart = false;
    healthPoint = 3;
    document.getElementById('HealthBar').style.width = '15vw';
    clearColor();
    startButton.style.display = 'inline-block';
}

function playGame() {
    console.log('Starting game');
    clearInterval(intervalID);
    win = false;
    order = [];
    humanSequence = [];
    flash = 0;
    intervalID = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    GameStart = true;
    healthPoint = 3;
    document.getElementById('HealthBar').style.width = '15vw';
    for (let i = 0; i < 12; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;
    console.log('Game sequence:', order);
    intervalID = setInterval(gameTurn, 900);
}

function gameTurn() {
    console.log('Game turn, flash:', flash, 'turn:', turn, 'compTurn:', compTurn);
    if (flash == turn) {
        clearInterval(intervalID);
        compTurn = false;
        clearColor();
        console.log('Player turn started');
    }

    if (compTurn) {
        clearColor();
        setTimeout(() => {
            console.log('Computer flashing tile', flash, order[flash]);
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            flash++;
        }, 400);
    }
}

function check() {
    console.log('Checking sequence, human:', humanSequence, 'order:', order);
    if (humanSequence[humanSequence.length - 1] !== order[humanSequence.length - 1]) {
        good = false;
    }

    if (humanSequence.length == 12 && good) {
        winGame();
    }

    if (good == false) {
        flashColor();
        turnCounter.innerHTML = 'Guess again!';
        wrongGuess();
        setTimeout(() => {
            turnCounter.innerHTML = turn;
            clearColor();
            if (isHardMode) {
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
    console.log('Game won');
    flashColor();
    turnCounter.innerHTML = 'You won Heidi Says!!';
    on = false;
    win = true;
    GameStart = false;
    clearInterval(intervalID);
    let audio = document.getElementById('GameWin');
    audio.play().catch(e => console.error('GameWin play error:', e));
    startButton.style.display = 'inline-block';
}

function loseGame() {
    console.log('Game lost');
    clearColor();
    turnCounter.innerHTML = 'Heidi Stole the ball!';
    on = false;
    good = false;
    win = false;
    GameStart = false;
    clearInterval(intervalID);
    let audio = document.getElementById('StolenBall');
    audio.play().catch(e => console.error('StolenBall play error:', e));
    noise = true;
    startButton.style.display = 'inline-block';
}