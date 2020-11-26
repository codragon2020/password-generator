// Assignment Code
var generateBtn = document.querySelector("#generate");

var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*=-_';

// var charNum = document.getElementById("charNum");
// var numBox = document.getElementById("num");
// var symBox = document.getElementById("sym");
// var submit = document.getElementById("submit");
// var yourPw = document.getElementById("yourPw");


// Write password to the #password input
function writePassword(l,characters) {
  // original code
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

  // new code //

  var pwd = '';

  for (var i = 0; i<l; i++){
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
}

console.log(writePassword(12,char));

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
