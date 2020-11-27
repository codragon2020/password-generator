// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = prompt("How many characters would you like to use?");
  while (length < 8 || length > 128) {
    alert("Length must be at least 8 characters and no more than 128 characters!");
    var length = prompt("How many characters would you like to use?");
  }

    var upperCase = confirm("Click OK to confirm you would like to use UPPERCASE letters?");
    var lowerCase = confirm("Click OK to confirm you would like to use lowercase letters?");
    var numbers = confirm("Click OK to confirm you would like to use numbers?");
    var symbols = confirm("Click OK to confirm you would like to use special characters?");

  while(upperCase === false && lowerCase === false && symbols === false && numbers === false) {
    alert("You must choose at least one parameter");
    var upperCase = confirm("Click OK to confirm you would like to use UPPERCASE letters?");
    var lowerCase = confirm("Click OK to confirm you would like to use lowercase letters?");
    var numbers = confirm("Click OK to confirm you would like to use numbers?");
    var symbols = confirm("Click OK to confirm you would like to use special characters?");
  };

// Arrays to be used
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

var passwordCharacters = []

console.log(passwordCharacters);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);