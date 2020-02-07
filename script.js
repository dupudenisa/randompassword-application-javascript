// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

var length = parseInt(prompt("Enter a number for length between 8 and 128"));

var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "123456789";
var specialchar = "!@#_";
var password = '';
var typeCount = 0;

//Checks if the length of the password the user selected meets the requirements.
if(length >= 8 && length <=128)
{
  
  //intializing the counter to 0
  var boolCount = 0; 

  var numBool = prompt("Enter yes if you want numbers in your password");

  /*
    Here we are checking if the user entered yes into the Number (numBool) prompt, if the user did enter yes, 
    then we add 1 to our counter called "numBool" that we will later divide the length of the password by so that 
    we can give the user a password of the correct length and of the same contents that the user 
    requested in the prompts; 

    the same is done for strBool and specBool
  */

  if(numBool == "yes")
  {
    boolCount += 1;
  }

  var strBool = prompt("Enter yes if you want letters in your password?");

  //checking the prompt
  
  if(numBool == "yes")
  {
    boolCount += 1;
  }
  var specBool = prompt("Enter yes if you want special characters in your password");

  //checking the prompt

  if(numBool == "yes")
  {
    boolCount += 1;
  }

  /*
    Here we are checking to see if the user entered "yes" in ANY of the prompts, if the user did not
    enter "yes" in any of the prompts then our counter, boolCount, will remain equal to 0 (because it was initialized to be 0)
    and we can use this fact as the conditional statement of our if statement. 

    i.e: if(boolCount != 0)
  */

  if(boolCount != 0)
  {

    /*
      If the user selected numbers to be used, the amount of of numbers in the string will be the size of the length 
      divided by the amount of options selected and the numbers will be selected at random. 
    */

    if (numBool == "yes") {

      for (i=0;i<(length/boolCount); i++)
      password +=numbers.charAt(Math.floor(Math.random()*numbers.length));
  
    }

    /*
      If the user selected letters to be used, the amount of of letters in the string will be the size of the length 
      divided by the amount of options selected and the letters will be selected at random. 
    */
    if (strBool == "yes") {
  
      for (i=0;i<(length/boolCount); i++)
      password +=letters.charAt(Math.floor(Math.random()*letters.length));
    } 


    /*
      If the user selected special characters to be used, the amount of of letters in the string will be the size of the length 
      divided by the amount of options selected and the special characters will be selected at random. 
    */
    if(specBool == "yes") {
  
      for (i=0;i<(length/boolCount); i++)
      password +=specialchar.charAt(Math.floor(Math.random()*specialchar.length));
  
    }

  }

  //send an alert if no options are selected
  else{

    alert("You need to select at least a letter number number of special character")
  
  }
  
}

//send an alert if the incorrect length was given
else{

  alert("You need to enter a length between 8 and 128")

}

//Returns the generated password
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
