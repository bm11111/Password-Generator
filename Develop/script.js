// Assignment code here
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "%", "?", ".", ",", ";", ":", "^", "&", "*", "/"];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


function generatePassword() {
  var promptLength = window.prompt("Choose a number between 8 and 128 for your password length");
  if (promptLength <8 || promptLength >128 || isNaN(promptLength)) {
    window.prompt("Please enter another value")
    generatePassword();
  }
  var choices = [];
  var promptUpperCase = confirm("Would you like your password to have upper case?");
  var promptLowerCase = confirm("Would you like your password to have lowercase letters?");
  var promptSpecialCharacters = confirm("Would you like your password to have special characters?");
  var promptNumber = confirm("Would you like your password to have numbers?")

  if (!promptUpperCase && !promptLowerCase && !promptSpecialCharacters && !promptNumber) {
    window.alert("Invalid Input");
    //generatePassword();
  } else {
    writePassword();
  }
  if (promptUpperCase === "true"){
    choices.push(promptUpperCase);
  } if (promptLowerCase === "true"){
    choices.push(promptLowerCase);
   } if (promptSpecialCharacters === "true"){
      choices.push(promptSpecialCharacters);
  } if (promptNumber === "true"){
    choices.push(promptNumber);
  } else {
    generatePassword();
  }
}


