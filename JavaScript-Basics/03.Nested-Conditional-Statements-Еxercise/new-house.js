function newHouse(flowersTypeInput, flowersCountInput, budgetInput) {
  let flowersType = flowersTypeInput;
  let flowersCount = Number(flowersCountInput);
  let budget = Number(budgetInput);

  let price = 0;

  switch (flowersType) {
    case "Roses":
      price = 5;
      if (flowersCount > 80) {
        price = price * 0.9;
      }
      break;
    case "Dahlias":
      price = 3.8;
      if (flowersCount > 90) {
        price = price * 0.85;
      }
      break;
    case "Tulips":
      price = 2.8;
      if (flowersCount > 80) {
        price = price * 0.85;
      }
      break;
    case "Narcissus":
      price = 3;
      if (flowersCount < 120) {
        price = price * 1.15;
      }
      break;
    case "Gladiolus":
      price = 2.5;
      if (flowersCount < 80) {
        price = price * 1.2;
      }
      break;
    default:
      break;
  }

  let finalPrice = flowersCount * price;
  let moneyRemaining = budget - finalPrice;
  let neededMoney = Math.abs(moneyRemaining);

  if (budget >= finalPrice) {
    console.log(
      `Hey, you have a great garden with ${flowersCount} ${flowersType} and ${moneyRemaining.toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${neededMoney.toFixed(2)} leva more.`
    );
  }
}

newHouse("Tulips", "88", "260");
