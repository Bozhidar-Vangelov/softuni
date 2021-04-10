function diagonalSums(input) {
  let index = 0;
  let firstSum = 0;
  let secondSum = 0;

  for (let row of input) {
    firstSum += row[index];
    row.reverse();
    secondSum += row[index];
    index++;
  }

  return `${firstSum} ${secondSum}`;
}

console.log(
  diagonalSums([
    [20, 40],
    [10, 60],
  ])
);

console.log("--------------");

console.log(
  diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89],
  ])
);
