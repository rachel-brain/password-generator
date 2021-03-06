// Assignment code:
var generateBtn = document.querySelector("#generate");

// Set strings of character options for the computer to pick from to generate a password:
var charactersLowercase = ['abcdefghijklmnopqrstuvwxyz'];
var charactersUppercase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var charactersNumbers = ['0123456789'];
var charactersSymbols = ['!#$%&(*+,-./:;<=>?@[]^_`{|}~'];

var userChoiceLowercase;
var userChoiceUppercase;
var userChoiceNumbers;
var userChoiceSymbols;
var passwordLength;

let selectedCharacters = [];

// Ask users via confirm boxes which characters they want to include & via a prompt box their chosen password length:
function askUser() {
  userChoiceLowercase = confirm("Do you want to include lowercase letters?");
  userChoiceUppercase = confirm("Do you want to include uppercase letters?");
  userChoiceNumbers = confirm("Do you want to include numbers?");
  userChoiceSymbols = confirm("Do you want to include symbols?");
  passwordLength = prompt("Enter the number of characters you want in your password between 8 and 128");
}

// Set parameters to ensure chosen characters are used in the password, including a minimum of one of each character:
function generatePassword() {

   if (passwordLength < 8 || passwordLength > 128){
     return "Your password length must be between 8 and 128 characters!";
   }
   
   if (!userChoiceLowercase && !userChoiceNumbers && !userChoiceSymbols && !userChoiceUppercase){
    return "You must choose at least one type of character!";
   }
  
   var allValidCharacters = [];

   var allLowercase = charactersLowercase[0].split("");
   allValidCharacters = allValidCharacters.concat(allLowercase)
   
   var allUppercase = charactersUppercase[0].split("");
   allValidCharacters = allValidCharacters.concat(allUppercase)
   
   var allNumbers = charactersNumbers[0].split("");
   allValidCharacters = allValidCharacters.concat(allNumbers)

   var allSymbols = charactersSymbols[0].split("");
   allValidCharacters = allValidCharacters.concat(allSymbols)

   var userSelection =[];

   if (userChoiceLowercase){    
    var randomCharacter = allLowercase[Math.floor(Math.random() * allLowercase.length)]
    userSelection = userSelection.concat(randomCharacter);
   }

   if (userChoiceUppercase){
    var randomCharacter = allUppercase[Math.floor(Math.random() * allUppercase.length)]
    userSelection = userSelection.concat(randomCharacter);
   }

   if (userChoiceNumbers){
    var randomCharacter = allNumbers[Math.floor(Math.random() * allNumbers.length)]
    userSelection = userSelection.concat(randomCharacter);
   }

   if (userChoiceSymbols){   
    var randomCharacter = allSymbols[Math.floor(Math.random() * allSymbols.length)]
    userSelection = userSelection.concat(randomCharacter);
   }
  
  var password = [];
  for (var i = 0; i <= passwordLength-1; i++) {
    password[i]= allValidCharacters[Math.floor(Math.random() * allValidCharacters.length)];
  }   

  for (var i = 0; i <= userSelection.length-1; i++) {   
    var randomNumberInPassword = Math.floor(Math.random() * password.length);
    password[randomNumberInPassword]= userSelection[i];
  }

  console.log(password);
  password = password.join("")
  return password;
}

// Write password to the #password input:
function writePassword() {
  askUser();  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;  
}

// Add event listener to generate button:
generateBtn.addEventListener("click", writePassword);
