function smallestTwoNumbers(digits) {
  let smallestDigits = [];
  let smallest = 0;

  for (let i = 0; i < 2; i++) {
    smallest = digits.splice(digits.indexOf(Math.min(...digits)), 1);
    smallestDigits.push(smallest.join());
  }

  console.log(smallestDigits.join(" "));
}

smallestTwoNumbers([30, 15, 50, 5]);
