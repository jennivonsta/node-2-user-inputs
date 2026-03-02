// Let's make a tip calculator with Node.js!

// Run this file with the node command:
// node tipCalculator.js

let bill = 100
let tipPercentage = 0.20
let numGuests = 4

console.

//calculate the tip amount 
let tipAmount = bill * tipPercentage;
console.log("Tip Amount: ", tipAmount)


//calculate the total bill
let totalBill = bill + tipAmount;
console.log("Total Bill: ", totalBill)

//calculate the total for each guest 
let amountOwedPerGuest = totalBill / numGuests;
console.log("total owed per guest: ", amountOwedPerGuest);