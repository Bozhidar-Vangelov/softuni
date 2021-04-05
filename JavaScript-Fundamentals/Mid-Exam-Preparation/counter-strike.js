function counterStrike(input) {
  let energy = Number(input.shift());

  let distance = input.shift();
  let wins = 0;
  let isWinner = true;

  while (distance != "End of battle") {
    if (energy - distance < 0) {
      console.log(
        `Not enough energy! Game ends with ${wins} won battles and ${energy} energy`
      );
      isWinner = false;
      return;
    }

    energy -= distance;
    wins++;
    if (wins % 3 === 0) {
      energy += wins;
    }
    distance = input.shift();
  }

  if (isWinner) {
    console.log(`Won battles: ${wins}. Energy left: ${energy}`);
  }
}

counterStrike([100, 10, 10, 10, 1, 2, 3, 73, 10, "End of battle"]);

console.log("-----------------------");

counterStrike([200, 54, 14, 28, 13, "End of battle"]);
