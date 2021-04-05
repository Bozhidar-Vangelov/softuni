function train(array) {
  let wagons = array.shift().split(" ").map(Number);
  let capacity = Number(array.shift());

  for (let commands = 0; commands < array.length; commands++) {
    if (array[commands].includes("Add")) {
      let newWagons = Number(array[commands].split(" ")[1]);
      wagons.push(newWagons);
    } else {
      let n = Number(array[commands]);
      for (let i = 0; i < wagons.length; i++) {
        const element = wagons[i];
        if (element + n <= capacity) {
          wagons[i] += n;
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
