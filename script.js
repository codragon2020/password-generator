// Assignment Code
var generateBtn = document.querySelector("#generate");

// Credit goes to https://www.youtube.com/watch?v=iKo9pDKKHnc for the idea
var alphaUpper = arrayFromLowToHigh(65, 90)
var alphaLower = arrayFromLowToHigh(97, 122)
var number = arrayFromLowToHigh(48, 57)
var specialChar = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
  ).concat(
    arrayFromLowToHigh(91, 96)
  ).concat(
    arrayFromLowToHigh(123, 126)
  )

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
  var newPassword = []

  // looping through the stored length and assigning random characters based on pwdChars array
  for (let i = 0; i < confirmLength; i++) {
      const characterCode = pwdChars[Math.floor(Math.random() * pwdChars.length)]
      newPassword.push(String.fromCharCode(characterCode))
  }
    return newPassword.join('');
}

// Function to create the pwdChars array with the arrayFromLowToHigh options
var pwdChars = []
function arrayFromLowToHigh(low, high) {
  const pwdChars = []
  for (let i = low; i <= high; i++) {
    pwdChars.push(i)
  }
  return pwdChars
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);