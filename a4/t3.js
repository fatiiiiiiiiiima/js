const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

// Define a function to handle the user's guess
function guessNumber() {
  rl.question('Guess the number between 1 and 100: ', (guessInput) => {
    const guess = parseInt(guessInput);

    // Validate the guess
    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log('Please enter a valid number between 1 and 100.');
      guessNumber(); // Ask again for a valid guess
      return;
    }

    // Increment the number of attempts
    attempts++;

    // Provide feedback to the user
    if (guess === randomNumber) {
      console.log(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`);
      rl.close();
    } else if (guess < randomNumber) {
      console.log('Too low! Try again.');
      guessNumber(); // Ask for another guess
    } else {
      console.log('Too high! Try again.');
      guessNumber(); // Ask for another guess
    }
  });
}

// Start the game
guessNumber();

