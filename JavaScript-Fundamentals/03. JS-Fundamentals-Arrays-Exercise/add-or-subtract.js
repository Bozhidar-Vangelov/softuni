function addOrSubtract(numbers) {
  let sumOfOriginalArray = 0;

  for (j = 0; j < numbers.length; j++) {
    sumOfOriginalArray += numbers[j];
  }

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numbers[i] += i;
    } else {
      numbers[i] -= i;
    }
  }

  let sumOfModifiedArray = 0;

  for (k = 0; k < numbers.length; k++) {
    sumOfModifiedArray += numbers[k];
  }

  console.log(numbers);
  console.log(sumOfOriginalArray);
  console.log(sumOfModifiedArray);
}

addOrSubtract([5, 15, 23, 56, 35]);
