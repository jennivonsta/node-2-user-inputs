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
const dogName = process.argv[2];
const humanAgeInput = process.argv[3];

// ----------------------------
// 2) Basic error handling (bonus)
// ----------------------------

// If the user forgot the name or age, show a helpful message.
if (!dogName || !humanAgeInput) {
  console.log("Usage: node dogAgeCalculator.js <DogName> <HumanAgeNumber>");
  console.log("Example: node dogAgeCalculator.js Maisie 3");
  process.exit(1);
}

// Convert the age input (a string) into a number.
const humanAge = Number(humanAgeInput);

// If the user typed something that isn't a number, show a friendly message.
if (Number.isNaN(humanAge)) {
  console.log("Please enter a number for the dog's age.");
  process.exit(1);
}

// Assumption says whole numbers > 0, but we’ll still protect against 0 or negatives.
if (humanAge <= 0) {
  console.log("Please enter a whole number greater than 0 for the dog's age.");
  process.exit(1);
}

// Optional: if someone types a decimal (like 7.5), this program rounds DOWN.
// Reason: the lab assumes whole numbers, so flooring keeps it simple and predictable.
const humanAgeWhole = Math.floor(humanAge);

// ----------------------------
// 3) Calculate dog years
// Rules:
// - Year 1 = 15 dog years
// - Year 2 = +9 dog years
// - Every year after that = +5 dog years per human year
// ----------------------------
let dogYears = 0;

if (humanAgeWhole === 1) {
  dogYears = 15;
} else if (humanAgeWhole === 2) {
  dogYears = 24; // 15 + 9
} else {
  // First 2 years = 24 dog years, then +5 for each year after 2
  dogYears = 24 + (humanAgeWhole - 2) * 5;
}

// ----------------------------
// 4) Print the result (must match the lab text exactly)
// ----------------------------
console.log(
  `Your dog, ${dogName}, is ${humanAgeWhole} years old, but that's ${dogYears} years old in dog years!`
);