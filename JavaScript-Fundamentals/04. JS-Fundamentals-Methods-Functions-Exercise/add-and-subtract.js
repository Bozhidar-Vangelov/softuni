function addAndSubtract(firstNum, secondNum, thirdNum) {
  let sumOfTwoNumbers = sum(firstNum, secondNum);
  let result = subtract(sumOfTwoNumbers, thirdNum);

  function sum(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  console.log(result);
}

addAndSubtract(23, 6, 10);
