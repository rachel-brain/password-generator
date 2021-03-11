// Assignment Code:
var generateBtn = document.querySelector("#generate");

// Set arrays (strings?) of character options for the computer to pick from to generate a password:
var charactersLowercase = ['abcdefghijklmnopqrstuvwxyz'],
    charactersUppercase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
    charactersNumbers = ['0123456789'],
    charactersSymbols = ['!#$%&(*+,-./:;<=>?@[]^_`{|}~']

var userChoiceLowercase,
    userChoiceUppercase,
    userChoiceNumbers,
    userChoiceSymbols,
    passwordLength

let selectedCharacters = []

// Ask users via confirm boxes which characters they want to include & via a prompt box their chosen password length:
function askUser() {
  userChoiceLowercase = confirm("Do you want to include lowercase letters?");
  userChoiceUppercase = confirm("Do you want to include uppercase letters?");
  userChoiceNumbers = confirm("Do you want to include numbers?");
  userChoiceSymbols = confirm("Do you want to include symbols?");
  passwordLength = prompt("Enter the number of characters you want in your password between 8 and 128", "");
}

function generatePassword() {
  var result = '',
      selectedCharacters = ''

  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);
  }

  // Options for characters chosen to be included in the password:
  if (userChoiceLowercase === true && userChoiceUppercase === true && userChoiceNumbers === true && userChoiceSymbols === true) {
    var selectedCharacters = charactersLowercase + charactersUppercase + charactersNumbers + charactersSymbols

  } else if (userChoiceLowercase === false && userChoiceUppercase === true && userChoiceNumbers === true && userChoiceSymbols === true) {
    var selectedCharacters = charactersUppercase + charactersNumbers + charactersSymbols
  
  } else if (userChoiceLowercase === true && userChoiceUppercase === false && userChoiceNumbers === true && userChoiceSymbols === true) {
    var selectedCharacters = charactersLowercase + charactersNumbers + charactersSymbols
    
  } else if (userChoiceLowercase === true && userChoiceUppercase === true && userChoiceNumbers === false && userChoiceSymbols === true) {
    var selectedCharacters = charactersLowercase + charactersUppercase + charactersSymbols
    
  } else if (userChoiceLowercase === true && userChoiceUppercase === true && userChoiceNumbers === true && userChoiceSymbols === false) {
    var selectedCharacters = charactersLowercase + charactersUppercase + charactersNumbers
  
  } else if (userChoiceLowercase === true && userChoiceUppercase === true && userChoiceNumbers === false && userChoiceSymbols === false) {
    var selectedCharacters = charactersLowercase + charactersUppercase
  
  } else if (userChoiceLowercase === false && userChoiceUppercase === false && userChoiceNumbers === true && userChoiceSymbols === true) {
    var selectedCharacters = charactersNumbers + charactersSymbols
   
  } else if (userChoiceLowercase === false && userChoiceUppercase === true && userChoiceNumbers === true && userChoiceSymbols === false) {
    var selectedCharacters = charactersUppercase + charactersNumbers 
  
  } else if (userChoiceLowercase === true && userChoiceUppercase === false && userChoiceNumbers === false && userChoiceSymbols === true) {
    var selectedCharacters = charactersLowercase + charactersSymbols  
  
  } else if (userChoiceLowercase === false && userChoiceUppercase === true && userChoiceNumbers === false && userChoiceSymbols === true) {
    var selectedCharacters = charactersUppercase + charactersSymbols
  
  } else if (userChoiceLowercase === true && userChoiceUppercase === false && userChoiceNumbers === true && userChoiceSymbols === false) {
    var selectedCharacters = charactersLowercase + charactersNumbers
      
  } for (i = 0; i <= passwordLength-1; i++) {
    result += selectedCharacters.charAt(Math.floor(Math.random() * passwordLength));
  } return result;
}

// Write password to the #password input
function writePassword() {
  askUser();  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;  
}

// Add event listener to generate button - I removed [disabled] from the button in CSS
generateBtn.addEventListener("click", writePassword);


// Other steps to add:
// 1. Alert user to begin again if only one type of character has been chosen
// } else {
//   var beginAgain = alert("You have not chosen enough types of characters to generate a strong password. Would you like to begin again?");
//   // If user pressed OK, run the function again or, if user presses cancel, the function ends
//   if (beginAgain) {
//     generatePassword();
//   } else (!beginAgain) {
//     return;
//   }
// };
// 
// 2. Confirm if user would like to generate another password
// var generateAgain = confirm("Would you like to generate another password?");
// If user pressed OK, run the function again
// if (generateAgain) {
//   generatePassword();
// } else (!generateAgain) {
//   return;
// }
// };
// 
// 3. Alert user to begin again if <8 or >128 characters have been chosen for the password length
//   var generateAgain = alert("You have not chosen enough types of characters to generate a strong password. Would you like to start again?");
//   // If user pressed OK, run the function again or, if user presses cancel, the function ends
//     if (generateAgain) {
//       generatePassword();
//     } else (!generateAgain) {
//       return;
//   }
//
 
// 4. When the password is generated, 
// add "click here to copy"
//

// Include this in the README file at the end:
// Added the information regarding strong password criteria to the Password Generator page so 
// that the user is confident that the random password generated by this website will be strong.
// I changed the conditions so that at least 2 character types should be selected (rather than 1) 
// to improve the strength of the password generated.
// Snapshots of examples such as Lastpass & Strong Password Generator are included in images folder.

// To check the selected characters are correct: (REMOVE FOR SUBMISSION)
// console.log(selectedCharacters);
// return

// Assistance from: 
// https://www.easyprogramming.net/javascript/js_random_password_generator.php
// https://stackoverflow.com/questions/63822962/i-am-making-a-password-generator-using-javascript-the-password-does-not-display
// & numerous other websites 