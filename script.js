//computer's random choice generator
function computerPlay() {
    let move = ["Rock", "Paper", "Scissor"];
    let randomMove = move[Math.floor(Math.random() * move.length)];
    return randomMove;
};

//single round of game
function playRound() {
    let userInput = prompt("Rock, Paper or Scissor?").toLowerCase();
    console.log(userInput);

    if (userInput === computerPlay()) {
        return tie;
    } else if (userInput === "rock" && computerPlay() === "Scissor" || userInput === "paper" && computerPlay() === "Rock" || userInput === "scissor" && computerPlay() === "Paper") {
        playerScore++;
        return win;
    } else (userInput === "rock" && computerPlay() === "Paper" || userInput === "paper" && computerPlay() === "Scissor" || userInput === "scissor" && computerPlay() === "Rock"); {
        computerScore++;
        return lose;
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

let playerScore = 0;
let computerScore = 0;
let win = "You won! Rock beats Scissor.";
let lose = "You lost! Paper beats Rock.";
let tie = "It's a tie! Rock does not beat Rock.";
let winMessage = "You beat the computer!";
let loseMessage = "You lost to the computer!";
let tieMessage = "It is a tie. No one won!";
const playerSelection = ["rock", "paper", "scissor"];
const computerSelection = computerPlay();
console.log(game());