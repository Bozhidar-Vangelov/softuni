function storage(input) {
  let store = new Map();

  for (const line of input) {
    let [product, quantity] = line.split(" ");
    quantity = Number(quantity);

    if (store.has(product)) {
      let newQuantity = store.get(product);
      newQuantity += quantity;
      store.set(product, newQuantity);
    } else {
      store.set(product, quantity);
    }
  }

  for (const kvp of store) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
