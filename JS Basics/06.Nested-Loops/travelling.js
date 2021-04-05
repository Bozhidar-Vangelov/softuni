function travelling(input) {
  let index = 0;
  let country = input[index++];

  while (country !== "End") {
    let neededMoney = Number(input[index++]);
    let savedMoney = 0;

    while (savedMoney < neededMoney) {
      savedMoney += Number(input[index++]);
    }
    console.log(`Going to ${country}!`);
    country = input[index++];
  }
}

travelling([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End",
]);
