function maxNumber(input) {
  let index = 0;
  let num = input[index];
  index++;
  let maxNumber = input[index];

  while (num !== "Stop") {
    let currentNumber = Number(num);
    if (currentNumber > maxNumber) {
      maxNumber = currentNumber;
    }
    num = input[index];
    index++;
  }
  console.log(maxNumber);
}

maxNumber(["45", "-20", "7", "99", "Stop"]);
