function listOfProducts(products) {
  let orderedProducts = products.sort();

  for (let i = 0; i < orderedProducts.length; i++) {
    console.log(`${i + 1}.${orderedProducts[i]} `);
  }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
