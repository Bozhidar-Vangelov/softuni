function cookingByNumbers(
  num,
  firstComm,
  secondComm,
  thirdComm,
  fourthComm,
  fifthComm
) {
  let commands = [firstComm, secondComm, thirdComm, fourthComm, fifthComm];

  for (let command of commands) {
    switch (command) {
      case "chop":
        num = num / 2;
        break;
      case "dice":
        num = Math.sqrt(num);
        break;
      case "spice":
        num += 1;
        break;
      case "bake":
        num = num * 3;
        break;
      case "fillet":
        num -= num * 0.2;
        break;
    }
    console.log(num);
  }
}

console.log(cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet"));
