function simpleCalculator(numOne, numTwo, operator) {
  let operation = null;

  switch (operator) {
    case "multiply":
      operation = (numOne, numTwo) => numOne * numTwo;
      break;
    case "divide":
      operation = (numOne, numTwo) => numOne / numTwo;
      break;
    case "add":
      operation = (numOne, numTwo) => numOne + numTwo;
      break;
    case "subtract":
      operation = (numOne, numTwo) => numOne - numTwo;
  }

  console.log(operation(numOne, numTwo));
}

simpleCalculator(40, 8, "divide");
