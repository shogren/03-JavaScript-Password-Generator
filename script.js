// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordLength = document.getElementById('charactercount');
console.log(passwordLength);

var uppercase = document.getElementById('uppercase');
var lowercase = document.getElementById('lowercase');
var numbers = document.getElementById('numbers');
var special = document.getElementById('special');


// function that generates the password
function generatePassword() {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


