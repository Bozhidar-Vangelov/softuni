function rounding(numberInput, precisionInput) {
  let number = Number(numberInput);
  let precision = Number(precisionInput);

  if (precision > 15) {
    precision = 15;
  }

  let numberResult = number.toFixed(precision);

  console.log(parseFloat(numberResult));
}

rounding(10.5, 3);
