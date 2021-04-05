function trainTheTrainers(input) {
  let index = 0;
  let jury = Number(input[index++]);
  let currentPresentation = input[index++];

  let presentationsCount = 0;
  let averagesSum = 0;

  while (currentPresentation !== "Finish") {
    let presentationSum = 0;

    for (i = 0; i < jury; i++) {
      let currentGrade = Number(input[index++]);
      presentationSum += currentGrade;
    }

    let presentationAverage = presentationSum / jury;
    console.log(`${currentPresentation} - ${presentationAverage.toFixed(2)}.`);

    presentationsCount++;
    averagesSum += presentationAverage;
    currentPresentation = input[index++];
  }
  let finalAverage = averagesSum / presentationsCount;
  console.log(`Student's final assessment is ${finalAverage.toFixed(2)}.`);
}

trainTheTrainers([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
