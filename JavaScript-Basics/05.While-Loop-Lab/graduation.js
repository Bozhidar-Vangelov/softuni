function graduation(input) {
  let index = 0;
  let name = input[index];
  index++;

  let grades = 1;
  let sum = 0;
  let excluded = 0;

  while (grades <= 12) {
    let grade = Number(input[index]);
    index++;
    sum += grade;

    if (grade < 4.0) {
      excluded++;
      if (excluded >= 2) {
        console.log(`${name} has been excluded at ${grades} grade`);
        break;
      }
      continue;
    }
    grades++;
  }

  let average = sum / 12;
  if (excluded < 2) {
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
  }
}

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
