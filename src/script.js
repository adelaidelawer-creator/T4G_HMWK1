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