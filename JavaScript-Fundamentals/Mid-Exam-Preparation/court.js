function nationalCourt([
  firstEmployeeEff,
  secondEmployeeEff,
  thirdEmployeeEff,
  peopleCount,
]) {
  let hours = 0;

  while (peopleCount > 0) {
    hours++;
    peopleCount -= firstEmployeeEff;
    peopleCount -= secondEmployeeEff;
    peopleCount -= thirdEmployeeEff;

    if (hours % 4 === 0) {
      hours++;
    }
  }

  console.log(`Time needed: ${hours}h.`);
}

nationalCourt([3, 2, 5, 40]);
