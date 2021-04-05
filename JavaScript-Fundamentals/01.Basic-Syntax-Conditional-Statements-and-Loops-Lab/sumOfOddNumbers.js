function sumOfOddNumbers(numberInput) {
  let number = Number(numberInput);
  let sum = 0;
  let counter = 0;

  for (i = 1; i <= 100; i += 2) {
    console.log(i);
    counter++;
    sum += i;
    if (counter === number) {
      console.log(`Sum: ${sum}`);
      break;
    }
  }
}

sumOfOddNumbers(3);
