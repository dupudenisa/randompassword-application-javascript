// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

var numBool =prompt("Enter yes if you want numbers in your password", "");
var strBool =prompt("Enter yes if you want letters in your password?", "");
var specBool =prompt("Enter yes if you want special characters in your password","");
var length =parseInt(prompt("Enter a number for length between 8 and 128", ""));

var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "123456789";
var specialchar = "!@#_";
var password = '';

if (strBool == "yes") {

  for (i=0;i<length; i++)
  password +=numbers.charAt(Math.floor(Math.random()*numbers.length));

}
else if (strBool == "yes") {

  for (i=0;i<length ; i++)
  password +=letters.charAt(Math.floor(Math.random()*letters.length));


} else if(specBool == "yes") {

  for (i=0;i<length; i++)
  password +=specialchar.charAt(Math.floor(Math.random()*specialchar.length));

} else{

  alert ("You have to pick lower case or numerical or special character");

}


return password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
