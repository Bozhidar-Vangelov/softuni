function minNumber(input) {
  let index = 0;
  let num = input[index];
  index++;
  let minNumber = input[index];

  while (num !== "Stop") {
    let currentNumber = Number(num);
    if (currentNumber < minNumber) {
      minNumber = currentNumber;
    }
    num = input[index];
    index++;
  }
  console.log(minNumber);
}

minNumber(["100", "99", "80", "70", "Stop"]);
