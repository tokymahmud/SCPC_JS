const findSecondSmallest = (numbersArray) => {
    let smallest = 0;
    let secondSmallest = 0;
  
    for (const num of numbersArray) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    return secondSmallest;
  };
  
  const numbers = [5, -1, 2, 8, 1, 7, 3];
  const secondSmallest = findSecondSmallest(numbers);
  console.log("Second smallest number:", secondSmallest);
  