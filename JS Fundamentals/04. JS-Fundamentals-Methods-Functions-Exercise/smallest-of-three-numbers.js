function smallestOfThreeNumbers(firstNum, secondNum, thirdNum) {
  let smallest = firstNum;

  let checker = [secondNum, thirdNum];

  for (i = 0; i < checker.length; i++) {
    if (checker[i] < smallest) {
      smallest = checker[i];
    }
  }

  return smallest;
}

console.log(smallestOfThreeNumbers(600, 342, 123));
