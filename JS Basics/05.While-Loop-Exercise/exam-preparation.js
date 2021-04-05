function examPreparation(input) {
  let index = 0;
  let maxUnsatisfyingGrades = Number(input[index++]);
  let unsatisfyingGrades = 0;
  let gradesSum = 0;
  let tasksCount = 0;
  let lastTask = "";

  let currentTask = input[index++];

  while (currentTask !== "Enough") {
    let currentGrade = Number(input[index++]);

    if (currentGrade <= 4) {
      unsatisfyingGrades++;

      if (unsatisfyingGrades === maxUnsatisfyingGrades) {
        break;
      }
    }

    gradesSum += currentGrade;
    tasksCount++;
    lastTask = currentTask;

    currentTask = input[index++];
  }

  if (unsatisfyingGrades === maxUnsatisfyingGrades) {
    console.log(`You need a break, ${maxUnsatisfyingGrades} poor grades.`);
  } else {
    console.log(`Average score: ${(gradesSum / tasksCount).toFixed(2)}`);
    console.log(`Number of problems: ${tasksCount}`);
    console.log(`Last problem: ${lastTask}`);
  }
}

examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
