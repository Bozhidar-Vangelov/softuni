function magicMatrices(matrix) {
  let sumRow = 0;
  let sumCol = 0;
  let isTrue = false;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      sumRow = sumRow + matrix[row][col];
    }
    for (let col1 = 0; col1 < matrix.length; col1++) {
      sumCol = sumCol + matrix[col1][row];
    }
    if (sumRow !== sumCol) {
      break;
    } else {
      isTrue = true;
    }
  }
  console.log(isTrue);
}

console.log(
  magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
