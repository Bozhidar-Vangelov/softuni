function puppyCare(input) {
  let index = 0;
  let boughtFood = input[index++];

  let actualFood = boughtFood * 1000;

  let totalEatenFood = 0;

  while (true) {
    let gramsFoodNeeded = input[index++];
    if (gramsFoodNeeded === "Adopted") {
      break;
    }
    totalEatenFood += Number(gramsFoodNeeded);
  }

  let leftovers = Math.abs(actualFood - totalEatenFood);
  let additional = Math.abs(totalEatenFood - actualFood);

  if (totalEatenFood <= actualFood) {
    console.log(`Food is enough! Leftovers: ${leftovers} grams.`);
  } else if (totalEatenFood > actualFood) {
    console.log(`Food is not enough. You need ${additional} grams more.`);
  }
}

puppyCare(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
