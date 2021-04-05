function reverseAnArrayOfNumbers(length, numbers) {
  let resultArray = [];

  for (let i = 0; i < length; i++) {
    resultArray[i] = numbers[i];
  }

  let output = "";

  for (let j = length - 1; j >= 0; j--) {
    output += resultArray[j] + " ";
  }

  console.log(output);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
