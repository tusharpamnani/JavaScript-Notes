// class = a blueprint for creating objects
//         define what properties and methods they have
//         use a constructor for unique properties

class player{
    score = 0;

    pause(){
        console.log("You paused the game");
    }
    
    exit(){
        console.log("You exited the game");
    }
}

const player1 = new player();
const player2 = new player();
const player3 = new player();

player1.score += 1;
player2.score += 2;
player3.score += 3;

console.log(player1.score);
console.log(player2.score);
console.log(player3.score);
player1.exit();
player1.pause();