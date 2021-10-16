//computer's random choice generator
function computerPlay() {
    let move = ["Rock", "Paper", "Scissor"];
    let randomMove = move[Math.floor(Math.random() * move.length)];
    return randomMove;
};

//single round of game
function playRound() {
    if (playerSelection === "Rock" && computerPlay() === "Scissor" || playerSelection === "Paper" && computerPlay() === "Rock" || playerSelection === "Scissor" && computerPlay() === "Paper") {
    playerScore++;
    return win;
} else if (playerSelection === "Rock" && computerPlay() === "Paper" || playerSelection === "Paper" && computerPlay() === "Scissor" || playerSelection === "Scissor" && computerPlay() === "Rock") {
    computerScore++;
    return lose;
} else {
    return tie;
}
}

//five rounds of game
function game() {
    for (let i = 0; i <= 4; i++) {
        console.log(playRound());
        console.log("Your Score: " + playerScore, "Opponent Score: " + computerScore);
    }
    return finalMessage();
}
    
//end of game message
function finalMessage() {
    if (playerScore < computerScore) {
        console.log(loseMessage);
    } else if (playerScore > computerScore) {
        console.log(winMessage);
    } else {
        console.log(tieMessage);
    }
}

let playerSelection = prompt("Rock, Paper or Scissor?");
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let win = "You won! " + playerSelection + " beats " +  computerSelection + ".";
let lose = "You lost! " + computerSelection + " beats " + playerSelection + ".";
let tie = "It's a tie! " + playerSelection + " does not beat " + computerSelection + ".";
let winMessage = "You beat the computer!";
let loseMessage = "You lost to the computer!";
let tieMessage = "It is a tie. No one won!";
console.log(game());