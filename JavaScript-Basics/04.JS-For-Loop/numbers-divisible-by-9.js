function numberDivisibleBy9(n1Input, n2Input) {
  let n1 = Number(n1Input);
  let n2 = Number(n2Input);

  let sum = 0;

  for (let i = n1; i <= n2; i++) {
    if (i % 9 === 0) {
      sum += i;
    }
  }
  console.log(`The sum: ${sum}`);

  for (let z = n1; z <= n2; z++) {
    if (z % 9 === 0) {
      console.log(z);
    }
  }
}

numberDivisibleBy9(100, 200);
