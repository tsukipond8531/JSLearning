const data = [
    { name: "John", score: 85 },
    { name: "Alice", score: 92 },
    { name: "Bob", score: 78 },
    { name: "Eve", score: 88 }
  ];
  
  // Use the reduce method to calculate the sum of scores in the array of objects
  const sumOfScores = data.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0);
  
  // Calculate the average by dividing the sum by the number of objects in the array
  const average = sumOfScores / data.length;
  
  console.log(`The average score is: ${average}`);
  