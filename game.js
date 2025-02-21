function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playerWon(player, computer) {
    return (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    );
}

let playerScore = 0;
let computerScore = 0;

function playRound(userChoice) {
    const computerPick = computerChoice();

    if (playerWon(userChoice, computerPick)) {
        playerScore++;
        return `You win! ${userChoice} beats ${computerPick}`;
    } else if (userChoice === computerPick) {
        return `It's a tie! You both picked ${userChoice}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerPick} beats ${userChoice}`;
    }
}

const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const resultDisplay = document.querySelector('#resultsMessage');
const winnersDisplay = document.querySelector('#winnersMessage');
const optionsDisplay = document.querySelectorAll('.optionsContainer');
const resetButton = document.querySelector('#resetGame');

function getResults(userChoice) {
    resultDisplay.textContent = playRound(userChoice);
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    if (playerScore === 5 || computerScore === 5) {
        winnersDisplay.textContent = `${
            playerScore === 5 ? 'You' : 'Computer'
        } have won the game!`;

        resetButton.style.display = 'block';
        optionsDisplay.style.display = 'none';
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = '';
    winnersDisplay.textContent = '';

    resetButton.style.display = 'none';
    optionsDisplay.style.display = 'block';
}

resetButton.addEventListener('click', resetGame);

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');

rockButton.addEventListener('click', function() {
    getResults('rock');
});

paperButton.addEventListener('click', function() {
    getResults('paper');
});

scissorsButton.addEventListener('click', function() {
    getResults('scissors');
});