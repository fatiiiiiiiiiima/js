const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your weight in kilograms: ', (weightInput) => {
  const weight = parseFloat(weightInput);

  rl.question('Enter your height in meters: ', (heightInput) => {
    const height = parseFloat(heightInput);

    // Calculate BMI
    const bmi = weight / (height * height);

    // Determine BMI category
    let category;
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    console.log(`Your BMI is: ${bmi.toFixed(2)} (${category})`);
    
    rl.close();
  });
});
