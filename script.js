//computer's random choice generator
function computerPlay() {
    let move = ['Rock', 'Paper', 'Scissor'];
    let randomMove = move[Math.floor(Math.random() * move.length)];
    return randomMove;
};

//input from player
function userChoice() {
    userInput = userInput.toLowerCase();
    while (userInput !== "rock") {
        alert("Invalid Option");
        userInput = window.prompt("Rock, Paper or Scissor?");
    }
}

//single round of game
function playRound(playerSelection, computerSelection) {
    if (userChoice(), computerPlay() === "Paper") {
        computerScore++;
        return lose;
    } else if (userChoice(), computerPlay() === "Rock") {
        return tie;
    } else {
        playerScore++;
        return win;
    }
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

//five rounds of game
function game() {
    for (let i = 0; i <= 4; i++) {
        console.log(playRound());
        console.log("Your Score: " + playerScore, "Opponent Score: " + computerScore);
    }
    return finalMessage();
}

let userInput = window.prompt("Rock, Paper or Scissor?");
let playerScore = 0;
let computerScore = 0;
let win = "You won! Rock beats Scissor.";
let lose = "You lost! Paper beats Rock.";
let tie = "It's a tie! Rock does not beat Rock.";
let winMessage = "You beat the computer!";
let loseMessage = "You lost to the computer!";
let tieMessage = "It is a tie. No one won!";
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(game());