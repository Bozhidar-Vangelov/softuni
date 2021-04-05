function sumOfTwoNumbers(input) {
  let index = 0;
  let start = Number(input[index++]);
  let end = Number(input[index++]);
  let magicNumber = Number(input[index]);
  let combinations = 0;
  let isFound = false;

  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      combinations++;
      if (i + j === magicNumber) {
        console.log(
          `Combination N:${combinations} (${i} + ${j} = ${magicNumber})`
        );
        isFound = true;
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound) {
    console.log(`${combinations} combinations - neither equals ${magicNumber}`);
  }
}

sumOfTwoNumbers(["88", "888", "2000"]);
