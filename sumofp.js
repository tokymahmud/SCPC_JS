function sumOfPositive(numbersArray) {
    let sum = 0;
    for (let num of numbersArray) {
      if (num > 0) {
        sum += num;
      }
    }
    return sum;
  }

//   array values
  const numbers = [2, -5, 10, -3, 7];
const result = sumOfPositive(numbers);
console.log("Sum of positive numbers:", result); 