// This script was my first attempt at completing the project

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to Generate Password when button is clicked
function generatePassword() {

  var confirmLength = prompt("How many characters would you like to use? \nNote: Must be at least 8 and no more than 128.");
  
  // Break out of the function early
  if (confirmLength === null) {
    return;
  } 

  // Password Length Checker. Checks that the 8 to 128 condition is met
  while (confirmLength < 8 || confirmLength > 128) {
    alert("Length must be at least 8 characters and no more than 128 characters!");
      var confirmLength = prompt("How many characters would you like to use?");
    }
     
  // Password Criteria Checker. Checks that at least one option is selected
  while(!upperCase && !lowerCase && !symbols && !numbers) {
    alert("Choose your password criteria. Uppercase, lowercase, numbers, and symbols are acceptable.");
    var upperCase = confirm("Click OK to confirm you would like to use UPPERCASE letters?");
    var lowerCase = confirm("Click OK to confirm you would like to use lowercase letters?");
    var numbers = confirm("Click OK to confirm you would like to use numbers?");
    var symbols = confirm("Click OK to confirm you would like to use special characters?");
  };

  // Arrays to be used
  var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

  var pwdChars = []
 
  // If statements will concatenate the different arrays IF confirm method is TRUE otherwise will not concatenate
  // Need to make this less redundant 
  
  if (upperCase) {
    pwdChars = pwdChars.concat(alphaUpper)
  }
 
  if (lowerCase) {
    pwdChars = pwdChars.concat(alphaLower)
  }

  if (numbers) {
    pwdChars = pwdChars.concat(number)
  }

  if (symbols) {
    pwdChars = pwdChars.concat(specialChar)
  }

  // Declaring variable for the new password
  var newPassword = ""
    
  // looping through the stored length and assigning random characters based on pwdChars array
  for (var i = 0; i < confirmLength; i++) {
      newPassword = newPassword + pwdChars[Math.floor(Math.random() * pwdChars.length)];
  }
    return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);