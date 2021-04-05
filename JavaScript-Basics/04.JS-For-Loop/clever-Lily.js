function cleverLily(ageInput, wmPriceInput, toyPriceInput) {
  let age = Number(ageInput);
  let wmPrice = Number(wmPriceInput);
  let toyPrice = Number(toyPriceInput);

  let money = 0;
  let toysAmount = 0;
  let moneyPerBirthday = 9;

  for (let i = 1; i <= age; i++) {
    if (i % 2 == 0) {
      money += moneyPerBirthday;
      moneyPerBirthday += 10;
    } else {
      toysAmount += 1;
    }
  }

  let toysSold = toyPrice * toysAmount;
  let totalAmount = toysSold + money;

  let n = totalAmount - wmPrice;
  let m = Math.abs(totalAmount - wmPrice);

  if (totalAmount >= wmPrice) {
    console.log(`Yes! ${n.toFixed(2)}`);
  } else {
    console.log(`No! ${m.toFixed(2)}`);
  }
}

cleverLily("10", "170", "6");
