document.getElementById('Red').onclick = illuminateRed;
document.getElementById('Green').onclick = illuminateGreen;
document.getElementById('Blue').onclick = illuminateBlue;
document.getElementById('Purple').onclick = illuminatePurple;


  function illuminateRed() {
    clearGlow();
    document.getElementById('Red').style.backgroundColor = "Red Tennis ball";
  }

  function illuminateGreen() {
    clearGlow();
    document.getElementById('Green').style.backgroundColor = "Green Tennis ball";
  }

  function illuminateBlue() {
    clearGlow();
    document.getElementById('Blue').style.backgroundColor = "Blue Tennis ball";
  }
  
  function illuminatePurple() {
    clearGlow();
    document.getElementById('Purple').style.backgroundColor = "Purple Tennis ball";
  }

  