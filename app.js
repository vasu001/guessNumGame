/**
 * Game Options
 *  - Player must be allowed to choose a number between min and max
 *  - Player gets a limited number of guesses
 *  - Notify the player if he guessed correctly
 *  - Notify the player if he loose
 *  - Notify the player of correct number if he loose
 *  - Let player choose to play again
 */

// Game Options
let
    min = 1,
    max = 20,
    winningNumber = Math.floor(Math.random() * (max - min + 1)) + min,
    guessesLeft = 3;

console.log(winningNumber);

// UI Options
const
    uiGame = document.querySelector('#game'),
    uiMinNum = document.querySelector('.min-num'),
    uiMaxNum = document.querySelector('.max-num'),
    uiGameInput = document.querySelector('#guess-input'),
    uiGuessBtn = document.querySelector('#guess-btn'),
    uiMessage = document.querySelector('.message');

// Set Min and Max dynamically
uiMinNum.textContent = min;
uiMaxNum.textContent = max;

// Play Again Event Listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

// Add Event Listener for Guess
uiGuessBtn.addEventListener('click', function () {
    let guess = parseInt(uiGameInput.value);

    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} & ${max}`, 'red');
    }

    // Check if won
    if (guess === winningNumber) {
        // Game Over and Won
        gameOver(true, `You Won! Congratulations`);
    } else {
        guessesLeft -= 1;
        if (guessesLeft !== 0) {
            // Change Border Color 
            uiGameInput.style.borderColor = 'red';
            // Set warning message
            setMessage(`Your guess is wrong. You have ${guessesLeft} guess left!`, 'red');
        } else {
            // Game Over
            gameOver(false, `You Lost! Correct winning number was ${winningNumber}`);
        }
    }
});

// Game Over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    // Disable Input
    uiGameInput.disabled = true;
    // Change Border Color
    uiGameInput.style.borderColor = color;
    // Set Losing Message
    setMessage(msg, color);

    // PlayAgain
    uiGuessBtn.value = 'Play Again';
    uiGuessBtn.className += 'play-again';
}

// Set Message
function setMessage(msg, color) {
    uiMessage.style.color = color;
    uiMessage.textContent = msg;
}