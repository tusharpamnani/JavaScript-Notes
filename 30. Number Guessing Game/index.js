const ans = Math.floor(Math.random()*10 + 1)
let guesses = 0;
document.getElementById("submitbtn").onclick = function() {
    let guess = document.getElementById("guessField").value
    guesses+=1;

    if(guess == ans){
        alert(`${ans} is the number. It took you ${guesses} guesses`);
    }
    else if (guess < ans) {
        alert("Too small");
    }
    else if (guess > ans){
        alert("Too large");
    }
}