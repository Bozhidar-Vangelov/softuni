function movingTarget(input) {
  let targets = input.shift().split(" ").map(Number);

  let actions = input.slice(0, -1);

  for (let action of actions) {
    let [command, index, value] = action.split(" ");

    if (index >= 0 && index < targets.length) {
      if (command === "Shoot") {
        targets[index] -= value;
        if (targets[index] <= 0) {
          targets.splice(index, 1);
        }
      } else if (command === "Add") {
        targets.splice(index, 0, value);
      } else if (command === "Strike") {
        let start = index - value;
        let end = value * 2 + 1;
        if (start >= 0 && end < targets.length) {
          targets.splice(start, end);
        } else {
          console.log("Strike missed!");
        }
      }
    } else if (command === "Add") {
      console.log("Invalid placement!");
    }
  }
  return targets.join("|");
}

console.log(
  movingTarget([
    "52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End",
  ])
);

console.log("----------");

console.log(movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]));
