function sumEvenNumbers(arrayOfNumbers) {
  let sum = 0;

  for (let digit of arrayOfNumbers) {
    if (digit % 2 === 0) {
      sum += Number(digit);
    }
  }

  console.log(sum);
}

sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
