const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get the current year
const currentYear = new Date().getFullYear();

rl.question('Enter your birth year: ', (birthYear) => {
  // Parse the input to an integer
  birthYear = parseInt(birthYear);

  // Validate input
  if (isNaN(birthYear) || birthYear < 0 || birthYear > currentYear) {
    console.log('Please enter a valid birth year.');
    rl.close();
    return;
  }

  // Calculate age
  const age = currentYear - birthYear;

  console.log(`You are currently ${age} years old.`);

  rl.close();
});
