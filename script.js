let guessInput = document.getElementById("guessInput");
let guessButton = document.getElementById("guessButton");
let message = document.getElementById("message");
let restartButton = document.getElementById("restartButton");
let preMessage = document.getElementById("premsg"); 

let minNumber = 1;
let maxNumber = 100;
let maxAttempts = 3;
let targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let attempts = 0;

guessButton.addEventListener("click", function () {
    preMessage.textContent = ""; // Clear the preMessage
    let userGuess = parseInt(guessInput.value);
    if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
        message.textContent = `Please enter a valid number between ${minNumber} and ${maxNumber}.`;
    } else {
        attempts++;
        if (userGuess === targetNumber) {
            message.textContent = `Congratulations! You guessed the number " ${targetNumber} " in ${attempts} attempts.`;
            guessInput.disabled = true;
            guessButton.disabled = true;
        } 
        else if (attempts === maxAttempts) {
            message.textContent = `Sorry, You lose! The correct number was ${targetNumber}.`;
            guessInput.disabled = true;
            guessButton.disabled = true;
        } 
        else if (userGuess < targetNumber) {
            message.textContent = `Correct answer is greater! You have ${maxAttempts - attempts} attempts remaining.`;
        } 
        else {
            message.textContent = `Correct answer is smaller! You have ${maxAttempts - attempts} attempts remaining.`;
        }
    }
});

restartButton.addEventListener("click", function () {
    // Reset the game
    attempts = 0;
    targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    guessInput.disabled = false;
    guessButton.disabled = false;
    preMessage.textContent = `Guess a number between ${minNumber} and ${maxNumber}. You have ${maxAttempts} chances.`;
    message.textContent = "";
    guessInput.value = "";
});
