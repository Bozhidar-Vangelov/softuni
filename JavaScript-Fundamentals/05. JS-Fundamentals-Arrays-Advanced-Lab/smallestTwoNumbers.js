function smallestTwoNumbers(numbers) {
  let orderedNumbers = numbers.sort((a, b) => a - b);

  let result = orderedNumbers.slice(0, 2);

  console.log(result.join(" "));
}

smallestTwoNumbers([30, 15, 50, 5]);
