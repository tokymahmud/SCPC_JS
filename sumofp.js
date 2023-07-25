function sumOfPositive(numbersArray) {
    let sum = 0;
    for (let num of numbersArray) {
      if (num > 0) {
        sum += num;
      }
    }
    return sum;
  }
  