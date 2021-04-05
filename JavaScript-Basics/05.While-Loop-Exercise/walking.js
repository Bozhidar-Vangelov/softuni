function walking(input) {
  let index = 0;
  let goal = 10000;
  let steps = 0;

  while (steps < goal) {
    let addedSteps = input[index++];

    if (addedSteps === "Going home") {
      steps += Number(input[index++]);
      break;
    }

    steps += Number(addedSteps);
  }

  if (steps > goal) {
    console.log("Goal reached! Good job!");
    console.log(`${steps - goal} steps over the goal!`);
  } else {
    console.log(`${goal - steps} more steps to reach goal.`);
  }
}

walking(["1000", "1500", "2000", "6500"]);

console.log("----------------------");

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
