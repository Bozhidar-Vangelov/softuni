function salary(input) {
  let n = Number(input[0]);
  let salary = Number(input[1]);

  for (i = 2; i < input.length; i++) {
    let site = input[i];

    if (site === "Facebook") {
      salary -= 150;
    } else if (site === "Instagram") {
      salary -= 100;
    } else if (site === "Reddit") {
      salary -= 50;
    }
  }

  if (salary <= 0) {
    console.log("You have lost your salary.");
  } else {
    console.log(`${salary}`);
  }
}

salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
