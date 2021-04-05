function oddAndEvenSum(num) {
  let digits = num.toString();

  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < digits.length; i++) {
    if (Number(digits[i]) % 2 === 0) {
      evenSum += Number(digits[i]);
    } else {
      oddSum += Number(digits[i]);
    }
  }

  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(oddAndEvenSum(3495892137259234));
