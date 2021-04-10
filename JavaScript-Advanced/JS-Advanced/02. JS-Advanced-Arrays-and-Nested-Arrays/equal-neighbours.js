function equalNeighbours(input) {
  let counter = 0;

  for (let index = 0; index < input.length - 1; index++) {
    for (let j = 1; j < input[index].length; j++) {
      if (input[index][j] == input[index + 1][j]) {
        counter++;
      }

      if (input[index][j] == input[index][j - 1]) {
        counter++;
      }
    }
  }

  for (let index = 0; index < input[input.length - 1].length; index++) {
    if (input[input.length - 1][index] == input[input.length - 1][index + 1]) {
      counter++;
    }
  }

  for (let index = 0; index < input.length - 1; index++) {
    if (input[index][0] == input[index + 1][0]) {
      counter++;
    }
  }

  console.log(counter);
}

equalNeighbours([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
