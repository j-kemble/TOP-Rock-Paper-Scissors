const playerCountElement = document.querySelector('.player_count');
const computerCountElement = document.querySelector('.computer_count');
const remainingMoves = document.querySelector('.moves')
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const roundWinner = document.querySelector('#round_winner');
const gameResult = document.querySelector('#game_winner');
const options = ['rock', 'paper', 'scissors'];
let playerCount = 0;
let computerCount = 0;
let movesRemaining = 10;
playerCountElement.textContent = playerCount;
computerCountElement.textContent = computerCount;
remainingMoves.textContent = movesRemaining;

function getComputerChoice(choice) {
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playerWon(player, computer) {
    return (
        player === 'rock' && computer === 'scissors' ||
        player === 'paper' && computer === 'rock' ||
        player === 'scissors' && computer === 'paper'
    );
}

function roundResult(userOption) {
    const computerResult = getComputerChoice();

    if (playerWon(userOption, computerResult)) {
        playerCount++;
        movesRemaining--;
        roundWinner.textContent = 'Player';
    } else if (userOption === computerResult) {
        roundWinner.textContent = 'Draw';
        movesRemaining--;
    } else {
        computerCount++;
        movesRemaining--;
        roundWinner.textContent = 'Computer';
    }
}

function gameResult() {
    if (playerCount > computerCount) {
        gameResult.textContent = 'Player';
        rockButton.textContent = 'Play Again';
        paperButton.textContent = 'Play Again';
        scissorsButton.textContent = 'Play Again';
        rockButton.addEventListener('click', resetGame);
        paperButton.addEventListener('click', resetGame);
        scissorsButton.addEventListener('click', resetGame);
    } else if (playerCount < computerCount) {
        gameResult.textContent = 'Computer';
        rockButton.textContent = 'Play Again';
        paperButton.textContent = 'Play Again';
        scissorsButton.textContent = 'Play Again';
        rockButton.addEventListener('click', resetGame);
        paperButton.addEventListener('click', resetGame);
        scissorsButton.addEventListener('click', resetGame);
    } else {
        gameResult.textContent = 'Draw';
        rockButton.textContent = 'Play Again';
        paperButton.textContent = 'Play Again';
        scissorsButton.textContent = 'Play Again';
        rockButton.addEventListener('click', resetGame);
        paperButton.addEventListener('click', resetGame);
        scissorsButton.addEventListener('click', resetGame);
    }
}

function resetGame() {
    playerCount = 0;
    computerCount = 0;
    movesRemaining = 10;
    playerCountElement.textContent = playerCount;
    computerCountElement.textContent = computerCount;
    remainingMoves.textContent = movesRemaining;
    roundWinner.textContent = '';
    gameResult.textContent = '';
}