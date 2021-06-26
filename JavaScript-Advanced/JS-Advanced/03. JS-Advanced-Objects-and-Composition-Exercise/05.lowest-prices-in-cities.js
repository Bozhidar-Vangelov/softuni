function lowestPricesInCities(input) {
  let log = new Map();

  for (const row of input) {
    let [town, product, price] = row.split("|").map((e) => e.trim());

    if (!log.get(product)) {
      log.set(product, new Map());
    }

    log.get(product).set(town, Number(price));
  }

  let result = "";

  for (const kvp of log) {
    let lowestPrice = [...kvp[1]].sort((a, b) => a[1] - b[1])[0];
    result += `${kvp[0]} -> ${lowestPrice[1]} (${lowestPrice[0]})\n`;
  }

  return result.trim();
}

console.log(
  lowestPricesInCities([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
  ])
);
