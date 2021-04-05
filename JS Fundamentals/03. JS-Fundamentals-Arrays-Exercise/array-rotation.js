function arrayRotation(array, numOfRotations) {
  for (let i = 0; i < numOfRotations; i++) {
    array[array.length] = array[i];
  }

  for (let j = 0; j < numOfRotations; j++) {
    array.shift(j);
  }

  let result = "";

  for (let k = 0; k < array.length; k++) {
    result += array[k] + " ";
  }
  console.log(result);
}

arrayRotation([51, 47, 32, 61, 21], 2);
