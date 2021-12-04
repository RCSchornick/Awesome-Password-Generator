// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//arrays of potential characters
var numberArray =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCaseArray = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCaseArray = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];
//get user input using prompts and confirms
function userPrompt() {
  var passwordLength = prompt("How long would you like your password?")
  while (passwordLength > 128 || passwordLength < 8) {
    alert("The password must be greater than 8 characters and no more than 128 characters.")
    passwordLength = prompt("How long would you like your password?")
  }
var confirmLowercase = confirm("Would you like to use lowercase letters?")
var confirmUppercase = confirm("Would you like to use uppercase letters?")
var confirmNumeric = confirm("Would you like to use numeric characters?")
var confirmSpecialCharacters = confirm ("Would you like to use special characters?")


var userChoice = {
  choiceLength: passwordLength, 
  choiceLower: confirmLowercase,
  choiceUpper: confirmUppercase,
  choiceNumeric: confirmNumeric,
  choiceSpecialCharacters: confirmSpecialCharacters,
}
console.log(userChoice)

return userChoice
}


//helper function to randomize any array that we might use
function RandomizeArray(array){
  var randomIndex = Math.floor(Math.random()*array.length)
  console.log("randomIndex: "+randomIndex)
  var indexValue = array[randomIndex]
  console.log("indexValue" +indexValue)
  return indexValue;
}
RandomizeArray(lowerCaseArray)

//generate password function that pulls everything together
function generatePassword() {
  var userOptions = userPrompt()
var possibleCharacters =[]
var password =[]

//conditional statements to check if user has confirmed a character type
if(userOptions.choiceLower === true) {
  possibleCharacters=possibleCharacters.concat(lowerCaseArray)
  possibleCharacters.push(RandomizeArray(lowerCaseArray))
}
if(userOptions.choiceUpper === true) {
  possibleCharacters=possibleCharacters.concat(upperCaseArray)
  possibleCharacters.push(RandomizeArray(upperCaseArray))
}
if(userOptions.choiceNumeric === true) {
  possibleCharacters=possibleCharacters.concat(numberArray)
  possibleCharacters.push(RandomizeArray(numberArray))
}
if(userOptions.choiceSpecialCharacters === true) {
  possibleCharacters=possibleCharacters.concat(specialCharacters)
  possibleCharacters.push(RandomizeArray(specialCharacters))
}


//base user password off of users chosen password length
for(var i = 0; i < userOptions.choiceLength; i ++) {
var stageArray = RandomizeArray(possibleCharacters) 
password.push(stageArray)
} 
console.log(password)

return password.join("")
}
