function computerPlay() {
    let move = ['Rock', 'Paper', 'Scissor'];
    let randomMove = move[Math.floor(Math.random() * move.length)];
    return randomMove;
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection, computerPlay() === 'Paper') {
        computerScore++;
        return lose;
    } else if (playerSelection, computerPlay() === 'Rock') {
        return tie;
    } else { 
        playerScore++;
        return win;
    }
}

function finalMessage() {
    if (playerScore < computerScore) {
        console.log(loseMessage);
    } else if (playerScore > computerScore) {
        console.log(winMessage);
    } else {
        console.log(tieMessage);
    }
}

function game() {
    for (let i = 0; i <= 5; i++) {
        if (playerScore < computerScore) {
            console.log(loseMessage);
        } else if (playerScore > computerScore) {
            console.log(winMessage);
        } else {
            console.log(tieMessage);
        }
    }
    return finalMessage();
}

let playerScore = 0;
let computerScore = 0;
let win = "You won! Rock beats Scissor.";
let lose = "You lost! Paper beats Rock.";
let tie = "It's a tie! Rock does not beat Rock.";
let winMessage = "You beat the computer!";
let loseMessage = "You lost to the computer!";
let tieMessage = "It is a tie. No one won!";
const playerSelection = 'Rock';
const computerSelection = computerPlay();
console.log(game());

