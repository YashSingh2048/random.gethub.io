// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("The random number is: ", randomNumber);

let guesses = 0;

function checkGuess() {
    // Get the user's guess from the input field
    const userGuess = parseInt(document.getElementById('guessField').value);
    
    // Increment the number of guesses
    guesses++;

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        displayMessage(`Congratulations! You guessed the number ${randomNumber} correctly in ${guesses} guesses.`);
    } else if (userGuess < randomNumber) {
        displayMessage("Too low! Try again.");
    } else {
        displayMessage("Too high! Try again.");
    }
}

function displayMessage(message) {
    document.getElementById('message').textContent = message;
}
