function evenAndOddSubstractors(arrayOfNumbers) {
  let evenSum = 0;
  let oddSum = 0;

  for (let digit of arrayOfNumbers) {
    if (digit % 2 === 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }
  }

  let result = evenSum - oddSum;

  console.log(result);
}

evenAndOddSubstractors([1, 2, 3, 4, 5, 6]);
