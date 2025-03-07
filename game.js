function computerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
}

function playerWon(player, computer) {
    if (
        player === 'rock' && computer === 'scissors' ||
        player === 'paper' && computer === 'rock' ||
        player === 'scissors' && computer === 'paper'
    ) {
        return true;
    } else {
        return false;
    };
}

let playerScore = 0;
let computerScore = 0;
let movesRemaining = 10;

function roundWon(userChoice) {
    const computerResult = computerChoice();

    if (playerWon(userChoice, computerResult)) {
        playerScore++;
        movesRemaining--;
        return 'Player wins round!';
    } else if (userChoice === computerResult) {
        movesRemaining--;
        return "It's a tie!";
    } else {
        computerScore++;
        movesRemaining--;
        return 'Computer wins round!';
    }
}

const playerCount = document.getElementsByClassName('player_count')
const computerCount = document.getElementsByClassName('computer_count')
const remainingMoves = document.getElementsByClassName('moves')
const roundWinner = document.getElementsByClassName('round_winner')
const gameWinner = document.getElementsByClassName('game_winner')
const resetButton = document.getElementById('resetGame')

function theResults(userChoice) {
    roundWinner.textContent = roundWon(userChoice);
    computerCount.textContent = computerScore;
    playerCount.textContent = playerScore;
    remainingMoves.textContent = movesRemaining;

    if (playerScore > computerScore && movesRemaining === 0) {
        gameWinner.textContent = 'Player wins the game!';
        resetButton.style.display = 'block';
    } else if (playerScore < computerScore && movesRemaining === 0) {
        gameWinner.textContent = 'Computer wins the game!';
        resetButton.style.display = 'block';
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    movesRemaining = 0;
    playerCount.textContent = playerScore;
    computerCount.textContent = computerScore;
    remainingMoves.textContent = movesRemaining;
    roundWinner.textContent = '';
    gameWinner.textContent = '';
    resetButton.style.display = 'none';
}

resetButton.addEventListener('click', resetGame);

const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')

rockButton.addEventListener('click', function () {
    theResults('rock');
});

paperButton.addEventListener('click', function () {
    theResults('paper');
});

scissorsButton.addEventListener('click', function () {
    theResults('scissors');
});