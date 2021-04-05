function sorting(arr) {
  let result = [];
  let ascendingOrder = arr.sort((a, b) => a - b);
  while (ascendingOrder.length !== 0) {
    result.push(ascendingOrder[ascendingOrder.length - 1]) &&
      ascendingOrder.pop();
    result.push(ascendingOrder[0]) && ascendingOrder.shift();
  }
  console.log(result.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
