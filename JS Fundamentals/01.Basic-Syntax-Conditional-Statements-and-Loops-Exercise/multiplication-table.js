function multiplicationTable(numberInput) {
  let number = Number(numberInput);

  for (i = 1; i <= 10; i++) {
    console.log(`${number} X ${i} = ${number * i}`);
  }
}

multiplicationTable(5);
