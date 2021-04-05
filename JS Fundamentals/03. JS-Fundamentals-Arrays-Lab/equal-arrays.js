function equalArrays(firstArray, secondArray) {
  let areEqual = true;
  let sum = 0;

  for (let i = 0; i < firstArray.length; i++) {
    sum += Number(firstArray[i]);
    if (firstArray[i] !== secondArray[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areEqual = false;
      break;
    }
  }
  if (areEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
