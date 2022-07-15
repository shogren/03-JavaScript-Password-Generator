// Assignment Code
var generateBtn = document.querySelector("#generate");

var useUpperCase = "";
var useLowerCase = "";
var useSpecial = "";
var useNumber = "";

// Add event listener to generate button
generateBtn.addEventListener("click", () => {    
  askUpper();
  askLower();
  askSpecial()
  askNumber();
  writePassword();
  results();
});


// ask if the user wants upper case characters in the password
function askUpper() {
  let upperCaseChoice = prompt("Do you want to require Upper Case characters?");
  if (upperCaseChoice.toLowerCase() == "yes") {
    useUpperCase = true;
    alert("Ok, upper case characters will be used.");
  } else if (upperCaseChoice.toLowerCase() == "no") {
    useUpperCase = false;
    alert("Ok, no upper case characters will be used.");
  } else {
    alert("Please enter 'Yes' or 'No'");
    askUpper();
  }
  console.log(useUpperCase);
}

function askLower() {
  let lowerCaseChoice = prompt("Do you want to require Lower Case characters?");
  if (lowerCaseChoice.toLowerCase() == "yes") {
    useLowerCase = true;
    alert("Ok, lower case characters will be used.");
  } else if (lowerCaseChoice.toLowerCase() == "no") {
    useLowerCase = false;
    alert("Ok, no lower case characters will be used.");
  } else {
    alert("Please enter 'Yes' or 'No'");
    askLower();
  }
  console.log(useLowerCase);
}


function askSpecial() {
  let specialChoice = prompt("Do you want to require Special characters?");
  if (specialChoice.toLowerCase() == "yes") {
    useSpecial = true;
    alert("Ok, special characters will be used.");
  } else if (specialChoice.toLowerCase() == "no") {
    useSpecial = false;
    alert("Ok, no special characters will be used.");
  } else {
    alert("Please enter 'Yes' or 'No'");
    askSpecial();
  }
  console.log(useSpecial);
}

function askNumber() {
  let numberChoice = prompt("Do you want to require Numbers?");
  if (numberChoice.toLowerCase() == "yes") {
    useNumber = true;
    alert("Ok, numbers will be used.");
  } else if (numberChoice.toLowerCase() == "no") {
    useNumber = false;
    alert("Ok, no numbers will be used.");
  } else {
    alert("Please enter 'Yes' or 'No'");
    askNumber();
  }
  console.log(useNumber);
}

function results() {
  console.log("Results:", useUpperCase, useLowerCase, useNumber, useSpecial);
}

// function that generates the password
function generatePassword() {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //just for visualizing
  passwordText.value = "password!";


}


specialCharactersArray = ["!","\"","#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

numbersArray = [0,1,2,3,4,5,6,7,8,9];

uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];