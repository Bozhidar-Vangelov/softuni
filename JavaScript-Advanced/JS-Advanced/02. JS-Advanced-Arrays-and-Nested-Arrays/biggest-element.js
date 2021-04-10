function biggestElement(input) {
  let maxNumber = Number.MIN_SAFE_INTEGER;
  for (let rows of input) {
    for (let digit of rows) {
      if (digit > maxNumber) {
        maxNumber = digit;
      }
    }
  }
  return maxNumber;
}

console.log(
  biggestElement([
    [20, 50, 10],
    [8, 33, 145],
  ])
);
