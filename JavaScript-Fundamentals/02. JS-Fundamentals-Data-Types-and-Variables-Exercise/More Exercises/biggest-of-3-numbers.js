function biggestOf3Numbers(firstNInput, secondNInput, thirdNInput) {
  let firstNumber = Number(firstNInput);
  let secondNumber = Number(secondNInput);
  let thirdNumber = Number(thirdNInput);

  if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log(firstNumber);
  } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    console.log(secondNumber);
  } else {
    console.log(thirdNumber);
  }
}

biggestOf3Numbers(-2, 7, 3);
