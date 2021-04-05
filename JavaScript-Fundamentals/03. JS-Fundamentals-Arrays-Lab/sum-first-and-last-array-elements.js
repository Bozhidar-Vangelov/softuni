function sumFirstAndLastArrayElements(arrayOfNumbers) {
  let sum = arrayOfNumbers[0] + arrayOfNumbers[arrayOfNumbers.length - 1];

  console.log(sum);
}

sumFirstAndLastArrayElements([20, 30, 40]);
