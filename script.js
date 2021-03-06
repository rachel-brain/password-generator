// Include this in the README file at the end:
// Added the information regarding strong password criteria to the Password Generator page 
// so that the user is confident that the random password generated will be strong.
// Snapshots of examples such as Lastpass & Strong Password Generator are included.
 

// Set up the properties within the object for the characters lowercase, uppercase, numeric &/or special characters
var requiredPassword = {
  charactersLength = 12,
  charactersLowercase: "a",
  charactersUppercase: "A",
  charactersNumbers: 1,
  charactersSpecial: ?,
} 

// Array of options for the computer to pick from
var optionsLength = []
for (let i = 8; i < 129; i++) {
  optionsLength.push(i)
}
var optionsLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var optionsUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var optionsNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var optionsSpecial = [!, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, ~]; 


var chooseCharacters = function() {
  // Ask user for their choices
  var userChoiceLength = window.prompt("Enter number of characters between 8 and 128"); // Number
  var userChoiceLowercase = window.prompt("Do you want to include lowercase letters?"); // Boolean
  var userChoiceUppercase = window.prompt("Do you want to include uppercase letters?"); // Boolean
  var userChoiceNumbers = window.prompt("Do you want to include numbers?"); // Boolean
  var userChoiceSpecial = window.prompt("Do you want to include special characters?"); // Boolean




  
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/* 
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

  prompt - ?

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

  prompt - choose how many characters you want to use

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters

  prompt - check which character types you want to use

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

  confirm?

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria


WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

  display in alert or on the page

  add "click here to copy?"

*/