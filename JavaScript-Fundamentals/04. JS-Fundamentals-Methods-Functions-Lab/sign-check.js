function signCheck(numOne, numTwo, numThree) {
  let array = [numOne, numTwo, numThree];

  let result = array[0];

  for (let i = 1; i < array.length; i++) {
    result *= array[i];
  }

  if (result >= 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}

signCheck(5, 12, -15);
