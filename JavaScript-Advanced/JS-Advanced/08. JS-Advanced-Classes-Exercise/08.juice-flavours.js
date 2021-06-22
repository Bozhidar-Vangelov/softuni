function juiceFlavours(arrOfJuices) {
  let juices = new Map();
  let juiceBottles = new Map();

  for (const juice of arrOfJuices) {
    let [flavour, quantity] = juice.split(" => ");
    quantity = Number(quantity);

    if (!juices.has(flavour)) {
      juices.set(flavour, 0);
    }

    let totalQuantity = juices.get(flavour) + quantity;

    if (totalQuantity >= 1000) {
      if (!juiceBottles.has(flavour)) {
        juiceBottles.set(flavour, 0);
      }

      let fullBottles = Math.trunc(totalQuantity / 1000);
      let totalBottles = juiceBottles.get(flavour) + fullBottles;
      juiceBottles.set(flavour, totalBottles);
    }

    juices.set(flavour, totalQuantity % 1000);
  }

  return juiceBottles.forEach((value, key) =>
    console.log(`${key} => ${value}`)
  );
}

console.log(
  juiceFlavours([
    "Orange => 2000",
    "Peach => 1432",
    "Banana => 450",
    "Peach => 600",
    "Strawberry => 549",
  ])
);
