function minerTask(input) {
  let products = {};

  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      input[i + 1] = Number(input[i + 1]);
      if (products.hasOwnProperty(input[i])) {
        products[input[i]] += input[i + 1];
      } else {
        products[input[i]] = input[i + 1];
      }
    }
  }

  for (let element of Object.keys(products)) {
    console.log(`${element} -> ${products[element]}`);
  }
}

minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
