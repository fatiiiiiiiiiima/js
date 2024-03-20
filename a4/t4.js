const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numItems = 3;
const taxRate = 0.07;
let totalCost = 0;
let numItemsEntered =0;

function calculateTotalCost() {
  rl.question(`Enter the price of item ${numItems - numItemsEntered + 1}: `, (priceInput) => {
    const price = parseFloat(priceInput);

    // Validate the price
    if (isNaN(price) || price <= 0) {
      console.log('Please enter a valid positive number for the price.');
      calculateTotalCost(); // Ask again for a valid price
      return;
    }

    // Add item price to total cost
    totalCost += price;
    numItemsEntered++;

    // If there are more items to enter, prompt for the next one
    if (numItemsEntered < numItems) {
      calculateTotalCost();
    } else {
      // Calculate total cost with tax
      const totalCostWithTax = totalCost * (1 + taxRate);
      
      console.log(`\nTotal cost without tax: $${totalCost.toFixed(2)}`);
      console.log(`Total cost including 7% sales tax: $${totalCostWithTax.toFixed(2)}`);
      rl.close();
    }
  });
}

console.log('Welcome to the shopping cart simulation.');
console.log(`Please enter the prices of ${numItems} different items.\n`);

calculateTotalCost();

