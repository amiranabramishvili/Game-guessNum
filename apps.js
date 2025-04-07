let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempt = 0;

function checkGuess() {
    const attemptDisplay = document.getElementById('attempt');
    const message = document.getElementById('message');
    const userGuess = document.getElementById('guessInput').value;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please write a number between 1 and 100!';
        return;
    }

    attempt++;
    attemptDisplay.textContent = `Try #${attempt}`;

    if (userGuess == secretNumber) {
        message.textContent = `Congratulations! You guessed ${secretNumber}`;
        document.getElementById('resetButton').style.display = 'block';
    } else if (userGuess < secretNumber) {
        message.textContent = 'Need higher, please try again!';
    } else {
        message.textContent = 'Need lower, please try again!';
    }
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempt = 0;
    document.getElementById('attempt').textContent = 'Try #0';
    document.getElementById('message').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('resetButton').style.display = 'none';
    document.getElementById('fireworks').innerHTML = '';
}

