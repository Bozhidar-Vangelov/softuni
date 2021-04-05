function smallShop(productInput, townInput, amountInput) {
  let product = productInput;
  let town = townInput;
  let amount = Number(amountInput);

  if (town === "Sofia") {
    if (product === "coffee") {
      amount = amount * 0.5;
      console.log(amount);
    } else if (product === "water") {
      amount = amount * 0.8;
      console.log(amount);
    } else if (product === "beer") {
      amount = amount * 1.2;
      console.log(amount);
    } else if (product === "sweets") {
      amount = amount * 1.45;
      console.log(amount);
    } else if (product === "peanuts") {
      amount = amount * 1.6;
      console.log(amount);
    }
  } else if (town === "Plovdiv") {
    if (product === "coffee") {
      amount = amount * 0.4;
      console.log(amount);
    } else if (product === "water") {
      amount = amount * 0.7;
      console.log(amount);
    } else if (product === "beer") {
      amount = amount * 1.15;
      console.log(amount);
    } else if (product === "sweets") {
      amount = amount * 1.3;
      console.log(amount);
    } else if (product === "peanuts") {
      amount = amount * 1.5;
      console.log(amount);
    }
  } else {
    if (product === "coffee") {
      amount = amount * 0.45;
      console.log(amount);
    } else if (product === "water") {
      amount = amount * 0.7;
      console.log(amount);
    } else if (product === "beer") {
      amount = amount * 1.1;
      console.log(amount);
    } else if (product === "sweets") {
      amount = amount * 1.35;
      console.log(amount);
    } else if (product === "peanuts") {
      amount = amount * 1.55;
      console.log(amount);
    }
  }
}

smallShop("peanuts", "Sofia", "2.5");
