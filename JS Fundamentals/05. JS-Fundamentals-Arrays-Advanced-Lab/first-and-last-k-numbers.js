function firstAndLastKNumbers(input) {
  let firstElement = input.shift();

  let firstArray = input.slice(0, firstElement);
  let secondArray = input.slice(input.length - firstElement, input.length);

  let firstRow = firstArray.join(" ");
  let secondRow = secondArray.join(" ");

  console.log(firstRow);
  console.log(secondRow);
}

firstAndLastKNumbers([3, 6, 7, 8, 9]);
