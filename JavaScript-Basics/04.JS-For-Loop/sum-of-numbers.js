function sumOfNunmbers(nInput) {
  let n = "" + nInput;
  let sum = 0;

  for (i = 0; i < n.length; i++) {
    let num = Number(n[i]);
    sum += num;
  }
  console.log(`The sum of the digits is:${sum}`);
}

sumOfNunmbers(20021);
