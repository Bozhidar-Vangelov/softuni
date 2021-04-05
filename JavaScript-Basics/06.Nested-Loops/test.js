function traveling(input) {
  let index = 0;
  let destination = input[index++];
  let budget = 0;

  while (destination !== "End") {
    budget = Number(input[index++]);
    let savings = 0;

    while (savings < budget) {
      savings += Number(input[index++]);
    }
    console.log(`Going to ${destination}!`);
    destination = input[index++];
  }
}

traveling([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);
