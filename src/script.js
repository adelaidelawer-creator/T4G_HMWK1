// =======================================================
// Assignment: Collect user info with prompt() and alert()
// =======================================================

// Step 1: Ask the user for their name
// prompt() shows a popup box with a text input and returns what the user types
let userName = prompt("Hi there! What is your name?");

// Step 2: Ask the user for their age
let userAge = prompt("Great! How old are you?");

// Step 3: Ask the user for their email
let userEmail = prompt("Last question — what is your email address?");

// Step 4: Build the message using the variables we just collected
// We use a template literal (backticks ``) so we can insert variables
// directly into the string using ${variableName}
let message = `Hi ${userName}, you are ${userAge} years old and we'll keep in touch via your email: ${userEmail}`;

// Step 5: Show the final message to the user in a popup alert box
alert(message);




// =======================================================
// Assignment: JavaScript Basics - Variables & Operators
// =======================================================

// --- A: Store my name and log it ---
let myName = "Adelaide";
console.log(myName);

// --- B: Store my age and log it ---
let myAge = 24;
console.log(myAge);

// --- C: Add two numbers ---
let firstNumber = 10;
let secondNumber = 5;
let sumResult = firstNumber + secondNumber;
console.log(sumResult);

// --- D: Subtract two numbers ---
let differenceResult = firstNumber - secondNumber;
console.log(differenceResult);

// --- E: Divide two numbers ---
let divisionResult = firstNumber / secondNumber;
console.log(divisionResult);

// --- F: Multiply two numbers ---
let multiplicationResult = firstNumber * secondNumber;
console.log(multiplicationResult);

// --- G: Remainder of 15 % 4 ---
let remainderResult = 15 % 4;
console.log(remainderResult);

// --- H: Store a boolean value ---
let isStudent = true;
console.log(isStudent);

// --- I: Check the data type of a number ---
let sampleNumber = 42;
console.log(typeof sampleNumber);

// --- J: Check the data type of a string ---
let sampleString = "Hello, world!";
console.log(typeof sampleString);