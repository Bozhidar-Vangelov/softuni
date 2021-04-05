function calorieCalculator(
  genderInput,
  weightInput,
  heightInput,
  ageInput,
  levelOfActivityInput
) {
  let gender = genderInput;
  let weight = Number(weightInput);
  let height = Number(heightInput);
  let age = Number(ageInput);
  let levelOfActivity = levelOfActivityInput;

  let blm = 0;

  if (gender === "m") {
    blm = 66 + 13.7 * weight + 5 * height * 100 - 6.8 * age;
  } else if (gender === "f") {
    blm = 655 + 9.6 * weight + 1.8 * height * 100 - 4.7 * age;
  }

  if (levelOfActivity === "sedentary") {
    blm *= 1.2;
  } else if (levelOfActivity === "lightly active") {
    blm *= 1.375;
  } else if (levelOfActivity === "moderately active") {
    blm *= 1.55;
  } else if (levelOfActivity === "very active") {
    blm *= 1.725;
  }

  console.log(
    `To maintain your current weight you will need ${Math.ceil(
      blm
    )} calories per day.`
  );
}

calorieCalculator("m", 75, 1.72);
