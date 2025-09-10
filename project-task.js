/*
Scenario:
You’ve been hired to help a local pet shelter digitize its animal adoption records. The program is meant to:
  
  Allow users to enter an animal type and adoption fee.
  
  Add the animal and fee to a list.
  
  Retrieve the adoption fee for a specific animal when requested.

However, the initial developer left the program in a buggy state, with missing exception-handling logic
and some errors in the implementation. Your job is to fix it!



Instructions
Start by Understanding the Errors:
Run the program and observe the exceptions that occur. Document what the exceptions are and where they happen.

Write Exception Handling Code:
Use try/catch blocks to handle the errors so the program doesn’t crash when incorrect input or unexpected situations occur.

Test and Debug:
Test the program with valid and invalid inputs to confirm that exceptions are handled gracefully
and the program continues running as intended.
*/

/*
Scenario:
Digitize pet shelter adoption records with error handling.
*/

const readlineSync = require('readline-sync');

// Data storage
let animals = [];
let fees = [];

// Function to add an animal
function addAnimal(name, fee) {
    if (!name || name.trim() === '' || isNaN(fee) || fee < 0) {
        throw new Error("Invalid animal name or adoption fee! Please enter a name and a non-negative number.");
    }
    animals.push(name.trim().toLowerCase()); // store lowercase for consistency
    fees.push(fee);
}

// Function to get adoption fee
function getAdoptionFee(animalName) {
    let index = animals.indexOf(animalName.trim().toLowerCase());
    if (index === -1) {
        throw new Error("Animal not found in records!");
    }
    return fees[index];
}

// Main program loop
console.log("🐾 Welcome to the Pet Shelter System ");

while (true) {
    let action = readlineSync.question("Choose an action: 'add', 'fee', or 'exit': ").toLowerCase();

    if (action === "exit") {
        console.log("Goodbye!");
        break;
    }

    try {
        if (action === "add") {
            let animal = readlineSync.question("Enter the animal's name: ");
            let fee = Number(readlineSync.question("Enter the adoption fee: "));
            addAnimal(animal, fee);
            console.log(`${animal.trim()} added with a fee of $${fee}.`);
        } else if (action === "fee") {
            let animal = readlineSync.question("Enter the animal's name to find its adoption fee: ");
            let fee = getAdoptionFee(animal);
            console.log(`${animal.trim()}'s adoption fee is $${fee}.`);
        } else {
            console.log("Invalid action. Please choose 'add', 'fee', or 'exit'.");
        }
    } catch (error) {
        console.log(`⚠️ Error: ${error.message}`);
    }
}
