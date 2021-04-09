function sameNumbers(digits) {
  digits = digits.toString();
  let isSame = true;
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== digits[i + 1] && digits[i + 1] !== undefined) {
      isSame = false;
    }

    sum += Number(digits[i]);
  }
  console.log(isSame);
  console.log(sum);
}

sameNumbers(2222222);
