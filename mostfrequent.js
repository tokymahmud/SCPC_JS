const mostFrequent = (arr) => {
    const elementFrequency = new Map();
  
    for (const element of arr) {
      elementFrequency.set(element, (elementFrequency.get(element) || 0) + 1);
    }
  
    let mostFrequentElement;
    let highestFrequency = 0;
  
    for (const [element, frequency] of elementFrequency.entries()) {
      if (frequency > highestFrequency) {
        mostFrequentElement = element;
        highestFrequency = frequency;
      }
    }
  
    return mostFrequentElement;
  };
  
  const arr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const mf = mostFrequent(arr);
  console.log("Frequent element:", mf);
  