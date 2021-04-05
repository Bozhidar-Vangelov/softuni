function multiplicationTable(nInput) {
  let n = Number(nInput);

  let result = 0;
  for (let i = 1; i <= 10; i++) {
    result = i * n;

    console.log(`${i} * ${n} = ${result}`);
  }
}

multiplicationTable(5);
