function aggregateElements(arr) {
  let sum = 0;
  let sumInversed = 0;
  let concated = "";
  for (let digit of arr) {
    sum += digit;
    sumInversed += 1 / digit;
    concated += digit
  }
  console.log(sum);
  console.log(sumInversed.toFixed(4));
  console.log(concated);
}

aggregateElements([1, 2, 3]);
