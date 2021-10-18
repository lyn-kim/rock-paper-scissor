//computer's random choice generator
function computerPlay() {
    let move = ["Rock", "Paper", "Scissor"];
    let randomMove = move[Math.floor(Math.random() * move.length)];
    return randomMove;
};

//single round of game
function playRound() {
    let playerSelection = prompt("Rock, Paper or Scissor?");
    let computerSelection = computerPlay();
    
    if (playerSelection === "Rock" && computerSelection === "Scissor" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissor" && computerSelection === "Paper") {
    playerScore++;
    return win + playerSelection + " beats " + computerSelection + ".";
} else if (computerSelection === "Paper" && playerSelection === "Rock" || computerSelection === "Scissor" && playerSelection === "Paper" || computerSelection === "Rock" && playerSelection === "Scissor") {
    computerScore++;
    return lose + computerSelection + " beats " + playerSelection + ".";
} else if (playerSelection === computerSelection) {
    return tie + playerSelection + " does not beat " + computerSelection + ".";
} else {
    computerScore++;
    return lose + computerSelection + " beats " + playerSelection + ".";
}
}

//five rounds of game
function game() {
    for (let i = 0; i <= 4; i++) {
        console.log(playRound());
        console.log("Your Score: " + playerScore, "Computer Score: " + computerScore);
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

let playerScore = 0;
let computerScore = 0;
let win = "You won! ";
let lose = "Computer Won! ";
let tie = "It's a tie! ";
let winMessage = "You beat the computer!";
let loseMessage = "You lost to the computer!";
let tieMessage = "It is a tie. No one won!";
console.log(game());