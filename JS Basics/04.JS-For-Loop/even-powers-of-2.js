function evenPowers(powerInput) {
  let power = Number(powerInput);

  for (let i = 0; i <= power; i += 2) {
    let result = Math.pow(2, i);
    console.log(result);
  }
}

evenPowers(5);
