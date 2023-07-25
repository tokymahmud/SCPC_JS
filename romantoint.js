const romanToInt = (romanNumeral) => {
    const romanNumeralsMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100, 
      D: 500,
      M: 1000
    };
  
    return [...romanNumeral].reduce((total, current, index, array) =>
      romanNumeralsMap[current] < romanNumeralsMap[array[index + 1]]
        ? total - romanNumeralsMap[current]
        : total + romanNumeralsMap[current], 0);
  };
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
//   rl.question("Enter a Roman numeral: ", (romanNumeral) => {
//     const result = romanToInt(romanNumeral);
//     console.log(`Corresponding integer value: ${result}`);
//     rl.close();
//   });
  