function gladiatorExpenses(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let brokenHelmets = Math.trunc(lostFightsCount / 2);
  let brokenSwords = Math.trunc(lostFightsCount / 3);
  let brokenShields = Math.trunc(lostFightsCount / 6);
  let brokenArmors = Math.trunc(brokenShields / 2);

  let expenses =
    brokenHelmets * helmetPrice +
    brokenSwords * swordPrice +
    brokenShields * shieldPrice +
    brokenArmors * armorPrice;

  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
