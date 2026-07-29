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


// ==============================
// A. Store your name in a variable and log it to the console
// ==============================

let myName = "Adelaide";
console.log("My Name:", myName);


// ==============================
// B. Store your age in a variable and log it to the console
// ==============================

let myAge = 22;
console.log("My Age:", myAge);


// ==============================
// C. Add two numbers and log the result
// ==============================

let addition = 15 + 10;
console.log("Addition:", addition);


// ==============================
// D. Subtract two numbers and log the result
// ==============================

let subtraction = 20 - 8;
console.log("Subtraction:", subtraction);


// ==============================
// E. Divide two numbers and log the result
// ==============================

let division = 24 / 6;
console.log("Division:", division);


// ==============================
// F. Multiply two numbers and log the result
// ==============================

let multiplication = 7 * 5;
console.log("Multiplication:", multiplication);


// ==============================
// G. Find the remainder of 15 % 4
// ==============================

let remainder = 15 % 4;
console.log("Remainder:", remainder);


// ==============================
// H. Store a boolean value and log it
// ==============================

let isStudent = true;
console.log("Boolean Value:", isStudent);


// ==============================
// I. Store a number and log its data type
// ==============================

let numberValue = 100;
console.log("Data Type of numberValue:", typeof numberValue);


// ==============================
// J. Store a string and log its data type
// ==============================

let stringValue = "Frontend Programming";
console.log("Data Type of stringValue:", typeof stringValue);