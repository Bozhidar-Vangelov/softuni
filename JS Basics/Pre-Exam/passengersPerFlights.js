function passengersPerFlight(arr) {
  let index = 0;
  let companies = arr[index++];
  let maxCompanyAveragePassengersName = "";
  let maxCompanyAveragePassengers = 0;

  for (let i = 0; i < companies; i++) {
    let companyName = arr[index++];
    let input = arr[index++];

    let companyAveragePassengers = 0;
    let flights = 0;

    while (input !== "Finish") {
      companyAveragePassengers += Number(input);
      input = arr[index++];

      flights++;
    }

    let currentAverage = companyAveragePassengers / flights;

    console.log(`${companyName}: ${Math.trunc(currentAverage)} passengers.`);

    if (maxCompanyAveragePassengers < currentAverage) {
      maxCompanyAveragePassengers = currentAverage;
      maxCompanyAveragePassengersName = companyName;
    }
  }
  console.log(
    `${maxCompanyAveragePassengersName} has most passengers per flight: ${Math.floor(
      maxCompanyAveragePassengers
    )}`
  );
}

passengersPerFlight([
  "3",
  "WizzAir",
  "180",
  "230",
  "100",
  "Finish",
  "BulgariaAir",
  "50",
  "60",
  "90",
  "Finish",
  "Lufthansa",
  "260",
  "320",
  "Finish",
]);

console.log("----------------------------");

passengersPerFlight([
  "2",
  "Qatar Airways",
  "95",
  "231",
  "323",
  "Finish",
  "LOT",
  "76",
  "89",
  "55",
  "Finish",
]);
