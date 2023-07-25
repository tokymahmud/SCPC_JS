const readline = require('readline');

// decrementing for loop
function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

const re = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

re.question("Enter any input: ", function(userInput) {
  const reversedOutput = reverseString(userInput);
  console.log("Reversed :", reversedOutput);
  re.close();
});
