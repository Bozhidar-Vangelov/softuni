function cinema(typeInput, rowsInput, colsInput) {
  let type = typeInput;
  let rows = Number(rowsInput);
  let cols = Number(colsInput);
  let area = rows * cols;

  let price = 0;

  switch (type) {
    case "Premiere":
      price = area * 12;
      console.log(`${price.toFixed(2)} leva`);
      break;
    case "Normal":
      price = area * 7.5;
      console.log(`${price.toFixed(2)} leva`);
      break;
    case "Discount":
      price = area * 5;
      console.log(`${price.toFixed(2)} leva`);
      break;
    default:
  }
}

cinema("Premiere", "10", "12");
