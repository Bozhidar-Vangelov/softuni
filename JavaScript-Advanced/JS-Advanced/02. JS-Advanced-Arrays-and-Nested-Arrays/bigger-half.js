function biggerHalf(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let biggerHalf = sorted.slice(sorted.length / 2);

  return biggerHalf;
}

console.log(biggerHalf([4, 7, 2, 5]));
