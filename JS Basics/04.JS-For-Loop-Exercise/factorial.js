function factorial(numberInput) {
  let number = Number(numberInput);
  let factorial = 1;

  for (let multiplier = 2; multiplier <= number; multiplier++) {
    factorial *= multiplier;
  }

  console.log(factorial);
}

factorial("4");
