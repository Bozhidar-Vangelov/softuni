function sumNumbers(input) {
  let index = 0;
  let firstNumber = Number(input[index]); // 100
  index++; // 1
  let sum = Number(input[index]); //10
  index++; // 2

  while (sum < firstNumber) {
    let currentNumber = Number(input[index]); // 20
    sum += currentNumber;
    index++; // 3
    if (sum >= firstNumber) {
      console.log(sum);
      break;
    }
  }
}

sumNumbers(["100", "10", "20", "30", "40"]);
