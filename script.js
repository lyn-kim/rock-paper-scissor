function computerPlay() {
    let move = ['Rock', 'Paper', 'Scissor'];
    let randomMove = move[Math.floor(Math.random() * move.length)];
    return randomMove;
};

const playerSelection = 'Rock';
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    if ('Rock', computerPlay() === 'Paper') {
        return "You Lose! Paper beats Rock";
    } else if ('Rock', computerPlay() === 'Rock') {
        return "You tied! Rock does not beat Rock";
    } else { 
        return "You won! Rock beats Scissor";
    }
}

