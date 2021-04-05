function sequence(input) {
  let index = 0;
  let neededNumber = input[index];
  let sum = 1;
  while (sum <= neededNumber) {
    console.log(sum);
    sum = sum * 2 + 1;
    index++;
  }
}

sequence(["31"]);
