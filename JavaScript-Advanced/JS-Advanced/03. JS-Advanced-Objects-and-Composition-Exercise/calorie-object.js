function calorieObject(input) {
  let result = {};
  for (let i = 0; i < input.length; i += 2) {
    let element = input[i];
    let quantity = Number(input[i + 1]);
    result[element] = quantity;
  }

  return result;
}

console.log(calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]));
