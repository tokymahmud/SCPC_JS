  rl.question("Enter a Roman numeral: ", (romanNumeral) => {
    const result = romanToInt(romanNumeral);
    console.log(`Corresponding integer value: ${result}`);
    rl.close();
  });
  