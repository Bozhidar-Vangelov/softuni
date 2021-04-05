function fishingBoat(budgetInput, seasonInput, fishersInput) {
  let budget = Number(budgetInput);
  let season = seasonInput;
  let fishers = Number(fishersInput);

  let price = 0;

  if (season === "Spring") {
    price = 3000;
  } else if (season === "Summer" || season === "Autumn") {
    price = 4200;
  } else if (season === "Winter") {
    price = 2600;
  }

  if (fishers <= 6) {
    price *= 0.9;
  } else if (fishers >= 7 && fishers <= 11) {
    price *= 0.85;
  } else {
    price *= 0.75;
  }

  if (fishers % 2 === 0 && season !== "Autumn") {
    price *= 0.95;
  }

  let moneyLeft = budget - price;
  let moneyNeeded = Math.abs(budget - price);

  if (budget >= price) {
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
  }
}

fishingBoat("2000", "Winter", "13");
