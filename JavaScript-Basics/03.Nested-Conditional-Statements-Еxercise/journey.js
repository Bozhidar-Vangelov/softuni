function journey(budgetInput, seasonInput) {
  let budget = Number(budgetInput);
  let season = seasonInput;

  let price = 0;
  let type;

  if (budget <= 100) {
    if (season === "summer") {
      price = budget * 0.3;
      type = "Camp";
    } else {
      price = budget * 0.7;
      type = "Hotel";
    }
    console.log("Somewhere in Bulgaria");
    console.log(`${type} - ${price.toFixed(2)}`);
  } else if (budget <= 1000) {
    if (season === "summer") {
      price = budget * 0.4;
      type = "Camp";
    } else {
      price = budget * 0.8;
      type = "Hotel";
    }
    console.log("Somewhere in Balkans");
    console.log(`${type} - ${price.toFixed(2)}`);
  } else {
    price = budget * 0.9;
    type = "Hotel";

    console.log("Somewhere in Europe");
    console.log(`${type} - ${price.toFixed(2)}`);
  }
}

journey("678.53", "winter");
