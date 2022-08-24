player = {
    hp: 3,
    maxHP: 3
};

const wrongGuess = (hitPoint) => {
    player.hp = player.hp - hitPoint;
    width = (player.hp*100)/(player.maxHP);
    if (width < 2 ){
        
    } else {

    }
    console.log(player.hp);
};

