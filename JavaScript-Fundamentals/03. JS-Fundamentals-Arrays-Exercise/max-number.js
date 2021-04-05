function maxNumber(array) {
  let output = "";
  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    let isBigger = true;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] >= currentNumber) {
        isBigger = false;
        break;
      }
    }

    if (isBigger) {
      output += `${currentNumber} `;
    }
  }
  console.log(output);
}

maxNumber([27, 19, 42, 2, 13, 45, 48]);
