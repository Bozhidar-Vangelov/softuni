function fuelMoney(distanceInput, passengersInput, pricePerLiterInput) {
  let distance = Number(distanceInput);
  let passengers = Number(passengersInput);
  let pricePerLiter = Number(pricePerLiterInput);

  let neededFuel = (distance / 100) * 7;
  neededFuel += passengers * 0.1;
  let money = neededFuel * pricePerLiter;

  console.log(`Needed money for that trip is ${money}lv.`);
}

fuelMoney(260, 9, 2.49);
