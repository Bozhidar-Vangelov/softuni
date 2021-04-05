function triangleOfNumbers(nInput) {
  let n = Number(nInput);

  for (i = 1; i <= n; i++) {
    let line = " ";
    for (j = 1; j <= i; j++) {
      line += i + " ";
    }
    console.log(line);
  }
}

triangleOfNumbers(6);
