/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/

// ----------------------------
// 1) Get inputs from the CLI
// process.argv is an array of what was typed in the terminal.
// argv[0] = path to node
// argv[1] = path to this file
// argv[2] = dog's name
// argv[3] = dog's age (human years)
// ----------------------------
/*

Dog Age Calculator

This program runs in Node.js and calculates a dog's age in dog years.

The user runs the program from the terminal and provides:
1. The dog's name
2. The dog's age in human years

Example command:
node dogAgeCalculator.js Maisie 3

*/

// Get the dog's name from the command line input
// process.argv is an array that contains what was typed in the terminal
// index 2 is the first user input after the file name
const dogName = process.argv[2];

// Get the dog's age from the command line input
// index 3 is the second user input after the file name
const humanAgeInput = process.argv[3];


// Check if the user forgot to enter the dog's name or age
// If either value is missing, show instructions and stop the program
if (!dogName || !humanAgeInput) {
  console.log("Usage: node dogAgeCalculator.js <DogName> <HumanAgeNumber>");
  console.log("Example: node dogAgeCalculator.js Maisie 3");
  
  // process.exit stops the program from continuing
  process.exit(1);
}


// Convert the age input from a string into a number
// Command line inputs always start as strings
const humanAge = Number(humanAgeInput);


// Check if the age entered is not a valid number
// Number.isNaN returns true if the value is "Not a Number"
if (Number.isNaN(humanAge)) {
  console.log("Please enter a number for the dog's age.");
  
  // Stop the program if the input is invalid
  process.exit(1);
}


// Check if the number entered is zero or negative
// The assignment assumes ages must be greater than 0
if (humanAge <= 0) {
  console.log("Please enter a whole number greater than 0 for the dog's age.");
  
  // Stop the program if the number is invalid
  process.exit(1);
}


// If the user enters a decimal number, round it down to a whole number
// Math.floor removes the decimal portion
const humanAgeWhole = Math.floor(humanAge);


// Create a variable to store the calculated dog age
let dogYears = 0;


// Calculate the dog's age using the rules from the assignment

// If the dog is 1 human year old
if (humanAgeWhole === 1) {
  dogYears = 15;
}

// If the dog is 2 human years old
// First year = 15 dog years
// Second year = +9 dog years
else if (humanAgeWhole === 2) {
  dogYears = 24;
}

// If the dog is older than 2 human years
// First two years = 24 dog years
// Every additional year adds 5 dog years
else {
  dogYears = 24 + (humanAgeWhole - 2) * 5;
}


// Print the final result to the terminal
// Template strings allow values to be inserted using ${ }
console.log(
  `Your dog, ${dogName}, is ${humanAgeWhole} years old, but that's ${dogYears} years old in dog years!`
);