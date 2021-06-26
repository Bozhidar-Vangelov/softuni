function negativePositiveNumber(digits) {
  let sortedDigits = [];
  for (let digit of digits) {
    if (digit < 0) {
      sortedDigits.unshift(digit);
    } else {
      sortedDigits.push(digit);
    }
  }
  console.log(sortedDigits.join(", "));
}

negativePositiveNumber([7, -2, 8, 9]);
