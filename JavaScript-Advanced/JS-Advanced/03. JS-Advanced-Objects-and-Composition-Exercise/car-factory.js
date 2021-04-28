function carFactory(car) {
  function getEngine(power) {
    const engines = [
      { power: 90, volume: 1800 },
      { power: 120, volume: 2400 },
      { power: 200, volume: 3500 },
    ];

    return engines.find((element) => element.power >= power);
  }

  function getWheels(wheelsize) {
    let wheel =
      Math.floor(wheelsize) % 2 === 0
        ? Math.floor(wheelsize) - 1
        : Math.floor(wheelsize);

    return Array(4).fill(wheel, 0, 4);
  }

  return {
    model: car.model,
    engine: getEngine(car.power),
    carriage: { type: car.carriage, color: car.color },
    wheels: getWheels(car.wheelsize),
  };
}

console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
