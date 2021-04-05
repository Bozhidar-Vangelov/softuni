function negativeOrPositiveNumber(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      result.unshift(array[i]);
    } else {
      result.push(array[i]);
    }
  }

  for (const element of result) {
    console.log(element);
  }
}

negativeOrPositiveNumber([7, -2, 8, 9]);
