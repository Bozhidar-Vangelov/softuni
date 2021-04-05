function amazingNumbers(number) {
  let convertedNumber = number.toString();
  let result = "";
  let sum = 0;

  for (let i = 0; i < convertedNumber.length; i++) {
    result += convertedNumber[i];
    sum += Number(convertedNumber[i]);
  }

  if (sum.toString().includes(9)) {
    console.log(`${number} Amazing? True`);
  } else {
    console.log(`${number} Amazing? False`);
  }
}

amazingNumbers(1233);
