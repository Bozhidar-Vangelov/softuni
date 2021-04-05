function processOddNumbers(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 1 || i % 2 !== 0) {
      newArray.push(array[i] * 2);
    }
  }

  console.log(newArray.reverse().join(" "));
}

processOddNumbers([10, 15, 20, 25]);
