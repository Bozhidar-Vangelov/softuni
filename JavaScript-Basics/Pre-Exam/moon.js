function moon(averageSpeedInput, fuelNeededInput) {
  averageSpeed = Number(averageSpeedInput);
  fuelNeeded = Number(fuelNeededInput);

  let distanceToMoon = 384400;
  let totalDistance = distanceToMoon * 2;

  let time = Math.ceil(totalDistance / averageSpeed);
  let totalTime = time + 3;

  let fuel = (fuelNeeded * totalDistance) / 100;

  console.log(totalTime);
  console.log(fuel);
}

moon(10000, 5);
