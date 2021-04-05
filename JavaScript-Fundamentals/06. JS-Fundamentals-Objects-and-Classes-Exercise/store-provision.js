function storeProvision(stock, order) {
  let storeStock = {};

  for (let i = 0; i < stock.length; i += 2) {
    let element = stock[i];
    storeStock[element] = Number(stock[i + 1]);
  }

  for (let i = 0; i < order.length; i += 2) {
    let element = order[i];
    if (storeStock.hasOwnProperty(element)) {
      storeStock[element] += Number(order[i + 1]);
    } else {
      storeStock[element] = Number(order[i + 1]);
    }
  }

  Object.keys(storeStock).forEach((key) => {
    console.log(`${key} -> ${storeStock[key]}`);
  });
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
