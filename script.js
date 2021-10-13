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

function game() {
    
}

let playerScore = 0;
let computerScore = 0;
let win = "You won! Rock beats Scissor.";
let lose = "You lost! Paper beats Rock.";
let tie = "It's a tie! Rock does not beat Rock.";
const playerSelection = 'Rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log("Player score is " + playerScore + ".", "Computer score is " + computerScore + ".");
