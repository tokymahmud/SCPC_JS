const readline = require('readline');

const calculator = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the first number: ", function (num1) {
  rl.question("Enter the operator (+, -, *, /): ", function (operator) {
    rl.question("Enter the second number: ", function (num2) {
      const result = calculator(parseFloat(num1), operator, parseFloat(num2));
      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});
