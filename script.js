// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
var userSelections = []
var lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperS = ["A","B","C","D","E","F","G","H","I","J","K","L","M","M","N","O","P","Q","R","S","T","U","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialChars = ["!",'"',"#","$","%",",","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","^","`","{","|","}","~"];
var passwordLength = 0
 
 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generateRandom(arr) {
  var randomIndex = Math.floor(Math.random()* arr.length);
  var randomNumber = arr[randomIndex];

  return randomNumber;

}

function generatePassword() {
  var length = prompt("What length between 8 and 128 characters would you like your password?\nEnter only as a number.");
  if (length >= 8 || length <= 128 ) {
    passwordLength = length
    var lowerCase = confirm("Would you like your password to include lowercase characters?");
    var upperCase = confirm("Would you like your password to include uppercase characters?");
    var numeric = confirm("Would you like your password to include numeric characters?");
    var special = confirm("Would you like your password to include special characters?");
  
        if (lowerCase) {
          userSelections.concat(lowerChars)
          console.log ("lowercase", lowerCase)
        }
        if (upperCase) {
          userSelections.concat(upperS)
        }
        if (numeric)  {
          userSelections.concat(numbers)
        }
        if (special) {
          userSelections.concat(specialChars)
        }

      //             for (var i = 0; i <= lowerCase.length; i++) {
      //               // var randomNumber = Math.floor(Math.random()+ lowerCase.length);
      //               password = chars.substring(randomNumber, randomNumber +1);
      //               console.log (password)
      
      // }  
    } 
    return 
  }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 




