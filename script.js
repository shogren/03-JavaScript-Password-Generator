// assigning some global variables 
var useUpperCase = "";
var useLowerCase = "";
var useSpecial = "";
var useNumber = "";
var charCount = "";

// assigning the arrays of possible choices for the final password array 
// there's probably an easier way to do this...
const specialCharactersArray = ["!","\"","#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

const numbersArray = [0,1,2,3,4,5,6,7,8,9];

const uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var passwordArray = [];

// querySelector for the generate button
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button, run the prompt functions
generateBtn.addEventListener("click", () => {    
  askUpper();
  askLower();
  askSpecial()
  askNumber();
  askCharCount()
  writePassword();
});

// ask if the user wants upper case characters in the password
function askUpper() {
  let upperCaseChoice = prompt("Do you want to use Upper Case characters?");
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
  console.log("User choose", useUpperCase, "for uppercase");
}

// ask if the user wants lower case characters in the password
function askLower() {
  let lowerCaseChoice = prompt("Do you want to use Lower Case characters?");
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
  console.log("User choose", useLowerCase, "for lowercase");
}

// ask the user if they want special characters in the password
function askSpecial() {
  let specialChoice = prompt("Do you want to use Special characters?");
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
  console.log("User choose", useSpecial, "for special characters");
}

// ask the user if they want numbers in the password
function askNumber() {
  let numberChoice = prompt("Do you want to use Numbers?");
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
  console.log("User choose", useNumber, "for numbers");
}

// ask the user how many characters they want in the password
function askCharCount() {
  let charCountChoice = parseInt(prompt("How many Characters do you want? \n Choose a number between 8 and 128"));
  if (charCountChoice >= 8 && charCountChoice <= 128) {
    charCount = charCountChoice;
  } else {
    alert("Please enter a whole number between 8 and 128");
    askCharCount();
  }
  console.log("User choose", charCount, "for character count");

  buildResults()
}

// build the final password array based on the users' choices
function buildResults() {

  if (useUpperCase === true) {
    finalArray = passwordArray.concat(uppercaseArray);
  }

  if (useLowerCase === true) {
    finalArray = passwordArray.concat(lowercaseArray, finalArray);
  }

  if (useSpecial === true) {
    finalArray = passwordArray.concat(specialCharactersArray, finalArray);
  }

  if (useNumber === true) {
    finalArray = passwordArray.concat(numbersArray, finalArray);
  }

  //default to using only lowercase characters if the user chooses all 4 options as false
  if (useUpperCase === false && useLowerCase === false && useSpecial === false && useNumber === false) {
    finalArray = lowercaseArray;
  }
  
  console.log("Final Array length:", finalArray.length)
  return finalArray;
}

// function that generates the password
// loops through the final array and returns a string of the password
function generatePassword() {
  const pwArray = [];
  for (let i = 0; i < charCount; i++) {
    const characters = finalArray[Math.floor(Math.random() * finalArray.length)]
    pwArray.push(characters);
  }
  return pwArray.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
