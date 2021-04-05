function piccolo(input) {
  let parkingLot = [];
  for (let element of input) {
    let [direction, car] = element.split(", ");

    if (direction === "IN" && !parkingLot.includes(car)) {
      parkingLot.push(car);
    } else if (direction === "OUT" && parkingLot.includes(car)) {
      let carIndex = parkingLot.indexOf(car);
      parkingLot.splice(carIndex, 1);
    }
  }

  if (parkingLot.length > 0) {
    console.log(parkingLot.sort().join("\n"));
  } else {
    console.log(`Parking Lot is Empty`);
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
