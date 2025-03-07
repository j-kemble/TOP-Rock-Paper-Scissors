// DOM elements
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const roundMessage = document.getElementById('round-message');
const winnerMessage = document.getElementById('winner-message');
const playerChoiceDisplay = document.getElementById('player-choice-display');
const computerChoiceDisplay = document.getElementById('computer-choice-display');
const choices = document.querySelectorAll('.choice');
const resetBtn = document.getElementById('reset-btn');
const playerChoiceElement = document.querySelector('.player-choice');
const computerChoiceElement = document.querySelector('.computer-choice');

// Game variables
let playerScore = 0;
let computerScore = 0;
const SCORE_LIMIT = 5;
const choiceEmojis = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
};

// Add event listeners
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        if (playerScore < SCORE_LIMIT && computerScore < SCORE_LIMIT) {
            playRound(choice.id);
        }
    });
});

resetBtn.addEventListener('click', resetGame);

// Game functions
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    // Display choices
    playerChoiceDisplay.textContent = choiceEmojis[playerChoice];
    computerChoiceDisplay.textContent = choiceEmojis[computerChoice];

    // Reset highlights
    playerChoiceElement.classList.remove('highlight');
    computerChoiceElement.classList.remove('highlight');

    // Determine winner
    let result;
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        result = "You win this round!";
        playerChoiceElement.classList.add('highlight');
    } else {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        result = "Computer wins this round!";
        computerChoiceElement.classList.add('highlight');
    }

    // Update round message
    roundMessage.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;

    // Check for game winner
    if (playerScore >= SCORE_LIMIT || computerScore >= SCORE_LIMIT) {
        endGame();
    }
}

function endGame() {
    const gameWinner = playerScore >= SCORE_LIMIT ? 'YOU ARE THE CHAMPION!' : 'COMPUTER IS THE CHAMPION!';
    winnerMessage.textContent = gameWinner;
    winnerMessage.classList.add('winner-animation');

    // Disable choices
    choices.forEach(choice => {
        choice.style.pointerEvents = 'none';
    });

    // Show reset button
    resetBtn.classList.add('visible');
}

function resetGame() {
    // Reset scores
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';

    // Reset messages
    roundMessage.textContent = 'Choose your weapon to start the battle!';
    winnerMessage.textContent = '';
    winnerMessage.classList.remove('winner-animation');

    // Reset choice displays
    playerChoiceDisplay.textContent = '?';
    computerChoiceDisplay.textContent = '?';
    playerChoiceElement.classList.remove('highlight');
    computerChoiceElement.classList.remove('highlight');

    // Enable choices
    choices.forEach(choice => {
        choice.style.pointerEvents = 'auto';
    });

    // Hide reset button
    resetBtn.classList.remove('visible');
}