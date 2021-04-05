function equalSumsEvenOddPosition(input) {
  let firstNumber = Number(input[0]);
  let secondNumber = Number(input[1]);

  let output = "";
  for (let num = firstNumber; num <= secondNumber; num++) {
    let oddSum = 0;
    let evenSum = 0;
    let numAsStr = num.toString();

    for (let index = 0; index < numAsStr.length; index++) {
      let digit = Number(numAsStr[index]);
      if (index % 2 === 0) {
        evenSum += digit;
      } else {
        oddSum += digit;
      }
    }

    if (evenSum === oddSum) {
      output += num + " ";
    }
  }
  console.log(output);
}

equalSumsEvenOddPosition(["100000", "100050"]);
