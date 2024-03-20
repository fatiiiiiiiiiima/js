const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function bankAccountManagement() {
    let balance = 0;

    rl.question("Enter your initial account balance:", (initialBalance) => {
        balance = parseFloat(initialBalance);

        // Validate initial balance
        if (isNaN(balance) || balance < 0) {
            console.log("Please enter a valid initial account balance.");
            rl.close();
            return;
        }

        // Display menu options
        displayMenu();
    });

    function displayMenu() {
        console.log("\nMenu:");
        console.log("1. Check Balance");
        console.log("2. Deposit Amount");
        console.log("3. Withdraw Amount");
        console.log("4. Exit");

        rl.question("Enter your choice:", (choice) => {
            switch (parseInt(choice)) {
                case 1:
                    console.log(`Your current account balance is: $${balance.toFixed(2)}`);
                    displayMenu();
                    break;
                case 2:
                    rl.question("Enter the amount you want to deposit:", (depositAmount) => {
                        depositAmount = parseFloat(depositAmount);
                        if (isNaN(depositAmount) || depositAmount <= 0) {
                            console.log("Please enter a valid positive number for the deposit amount.");
                        } else {
                            balance += depositAmount;
                            console.log(`$${depositAmount.toFixed(2)} deposited successfully.`);
                        }
                        displayMenu();
                    });
                    break;
                case 3:
                    rl.question("Enter the amount you want to withdraw:", (withdrawAmount) => {
                        withdrawAmount = parseFloat(withdrawAmount);
                        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
                            console.log("Please enter a valid positive number for the withdrawal amount.");
                        } else if (withdrawAmount > balance) {
                            console.log("Insufficient funds. Cannot withdraw more than the current balance.");
                        } else {
                            balance -= withdrawAmount;
                            console.log(`$${withdrawAmount.toFixed(2)} withdrawn successfully.`);
                        }
                        displayMenu();
                    });
                    break;
                case 4:
                    console.log("Thank you for using our bank account management system.");
                    rl.close();
                    break;
                default:
                    console.log("Invalid choice. Please choose a number between 1 and 4.");
                    displayMenu();
            }
        });
    }
}

// Run the bank account management system
bankAccountManagement();
