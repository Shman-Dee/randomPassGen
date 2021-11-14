// Assignment Code
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//create input variables
let userInputs = [];
let passwordLength = "";

const characters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "~",
  "`",
  "[",
  "{",
  "}",
  "]",
  "\\",
  "|",
  ";",
  ":",
  "'",
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const lowercases = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function generatePassword() {
  passwordLength = prompt(
    "Please chose a password length of 8 to 128 characters"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "Password MUST by more than 8 characters and at least 128 characters"
    );
  } else {
    let addNumbers = confirm("Would you like numbers in your password?");
    if (addNumbers) {
      userInputs = userInputs.concat(numbers);
    }
    let addUppercase = confirm(
      "Would you like to add uppercase to your password?"
    );
    if (addUppercase) {
      userInputs = userInputs.concat(upper);
    }

    let addLowercase = confirm(
      "Would you like to add lowercase to your password"
    );
    if (addLowercase) {
      userInputs = userInputs.concat(lowercases);
    }
    let addSpecialCharacters = confirm(
      "Would you like to add special characters to your password?"
    );
    if (addSpecialCharacters) {
      userInputs = userInputs.concat(characters);
      // all ok's are gathered in a new array
    }
    if (
      !addNumbers &&
      !addLowercase &&
      !addSpecialCharacters &&
      !addUppercase
    ) {
      alert("No password generated");
    }

    let result = "";

    for (let i = 0; i < passwordLength; i++) {
      result =
        result + userInputs[Math.floor(Math.random() * userInputs.length)];
      console.log(result);
    }
    return result;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// we need an event listener to generate a series of prompts and when we click a button we get prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// we need 4 prompts as criterias for uppercase characters, lowercase characters, special characters, and numbers

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// we need a function to check the legth of a password that the user designates

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// the password is posted in the box

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

//when we click on a button we are prompted to choose a length of passwordText
//then we prompted individually to choose if we want numbers, uppercase, lowercase, and special characters
//then the result is posted in the box
