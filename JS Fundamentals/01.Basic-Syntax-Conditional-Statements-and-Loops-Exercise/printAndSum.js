function printAndSum(firstNumberInput, secondNumberInput) {
  let firstNumber = Number(firstNumberInput);
  let secondNumber = Number(secondNumberInput);

  let line = "";
  let sum = 0;

  for (i = firstNumber; i <= secondNumber; i++) {
    line += i + " ";
    sum += i;
  }
  console.log(line);
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
