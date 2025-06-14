// Declare healthPoint as global to be accessible from script.js
let healthPoint = 3;

function wrongGuess() {
    healthPoint -= 1;
    const healthBar = document.getElementById('HealthBar');
    if (healthBar) {
        if (healthPoint <= 0) {
            healthPoint = 0;
            healthBar.style.width = '0%';
            loseGame();
        } else {
            healthBar.style.width = `${(healthPoint / 3) * 15}vw`; // Scale width based on healthPoint
        }
        console.log('Health updated to:', healthPoint, 'width:', healthBar.style.width);
    } else {
        console.error('HealthBar element not found');
    }
}