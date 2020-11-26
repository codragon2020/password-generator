// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = prompt("How many characters would you like to use?");
  if (length < 8 || length > 128) {
    alert("Length must be at least 8 characters and no more than 128 characters!");
    var length = prompt("How many characters would you like to use?");
  }

var upperCase = confirm("Would you like to use UPPERCASE letters?");
var lowerCase = confirm("Would you like to use lowercaser letters?");
var numbers = confirm("Would you like to use numbers?")
var symbols = confirm("Would you like to use special characters?")



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
