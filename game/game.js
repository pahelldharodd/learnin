// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the user's guess
function checkGuess() {
    // Get the user's guess from the input field
    const userGuess = parseInt(document.getElementById("guessInput").value);

    // Get the message element
    const messageElement = document.getElementById("message");

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        messageElement.textContent = "Congratulations! You guessed the correct number!";
        messageElement.style.color = "green";
    } else if (userGuess < randomNumber) {
        messageElement.textContent = "Too low! Try again.";
        messageElement.style.color = "red";
    } else {
        messageElement.textContent = "Too high! Try again.";
        messageElement.style.color = "red";
    }
}
