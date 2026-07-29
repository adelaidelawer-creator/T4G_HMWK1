// =======================================================
// Assignment: Collect user info with prompt() and alert()
// =======================================================

// Step 1: Ask the user for their name
let userName = prompt("Hi there! What is your name?");

// Step 2: Ask the user for their age
let userAgeInput = prompt("Great! How old are you?");
let userAge = Number(userAgeInput);

// Step 3: Ask the user for their email
let userEmail = prompt("Last question — what is your email address?");

// Step 4: Build the message using the variables we just collected
let message = "";

// Step 5: Check the user's age and build the appropriate message
if (!userName || userName.trim() === "") {
    message = "Please enter your name.";
} else if (!userAgeInput || Number.isNaN(userAge) || userAge < 0) {
    message = "Please enter a valid age.";
} else if (userAge < 12) {
    message = `Hi ${userName}, you are ${userAge} years old and you are too young to register.

Sorry 😔😔`;
} else if (userAge >= 12 && userAge < 18) {
    message = `Hi ${userName}, you are ${userAge} years old and you have limited options to register for.

We will keep in touch via your email: ${userEmail}. 👏🏽👏🏽`;
} else {
    message = `Hi ${userName}, you are ${userAge} years old and you can register for any option of your choosing.

We will keep in touch via your email: ${userEmail}. 👏🏽👏🏽`;
}

// Step 6: Show the final message to the user in a popup alert box
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