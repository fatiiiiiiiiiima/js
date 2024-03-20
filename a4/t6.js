const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define a function to create a product
function createProduct() {
  let product = {};

  rl.question('Enter product name: ', (name) => {
    product.name = name;

    rl.question('Enter product price: ', (priceInput) => {
      product.price = parseFloat(priceInput);

      // Validate the price
      if (isNaN(product.price) || product.price <= 0) {
        console.log('Please enter a valid positive number for the price.');
        createProduct(); // Ask again for a valid price
        return;
      }

      rl.question('Enter quantity in stock: ', (quantityInput) => {
        product.quantity = parseInt(quantityInput);

        // Validate the quantity
        if (isNaN(product.quantity) || product.quantity < 0) {
          console.log('Please enter a valid non-negative integer for the quantity.');
          createProduct(); // Ask again for a valid quantity
          return;
        }

        // Add the product to the inventory
        inventory.push(product);
        console.log('Product added successfully.\n');
        displayMenu();
      });
    });
  });
}

// Define a function to view all products
function viewAllProducts() {
  if (inventory.length === 0) {
    console.log('No products in inventory.\n');
  } else {
    console.log('--- All Products ---');
    inventory.forEach(product => {
      console.log(`Name: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}`);
    });
    console.log();
  }
  displayMenu();
}

// Define a function to search for a product
function searchProduct() {
  rl.question('Enter product name to search: ', (productName) => {
    const product = inventory.find(item => item.name === productName);
    if (product) {
      console.log(`Name: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}\n`);
    } else {
      console.log('Product not found.\n');
    }
    displayMenu();
  });
}

// Define a function to update stock
function updateStock() {
  rl.question('Enter product name to update stock: ', (productName) => {
    const product = inventory.find(item => item.name === productName);
    if (product) {
      rl.question('Enter new stock quantity: ', (newQuantityInput) => {
        const newQuantity = parseInt(newQuantityInput);
        if (isNaN(newQuantity) || newQuantity < 0) {
          console.log('Please enter a valid non-negative integer for the quantity.');
          updateStock(); // Ask again for a valid quantity
          return;
        }
        product.quantity = newQuantity;
        console.log('Stock updated successfully.\n');
        displayMenu();
      });
    } else {
      console.log('Product not found.\n');
      displayMenu();
    }
  });
}

// Define a function to display the menu
function displayMenu() {
  rl.question(`Menu:
1. Add Product
2. View All Products
3. Search for a Product
4. Update Stock
5. Exit
Enter your choice: `, (choice) => {
    switch (choice) {
      case '1':
        createProduct();
        break;
      case '2':
        viewAllProducts();
        break;
      case '3':
        searchProduct();
        break;
      case '4':
        updateStock();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Invalid choice. Please enter a number between 1 and 5.\n');
        displayMenu();
    }
  });
}

// Define an array to store the inventory
let inventory = [];

// Start the program by displaying the menu
console.log('Welcome to the Inventory Management System.\n');
displayMenu();
