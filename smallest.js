const ssmall = (numbersArray) => {
    const sortedArray = numbersArray.slice().sort((a, b) => a - b);
    return sortedArray[1];
  };
  
  const numbers = [5,1, 2, 8, 7, 3];
  const secondSmall = ssmall(numbers);
  console.log("Second small number: ", secondSmall);
  