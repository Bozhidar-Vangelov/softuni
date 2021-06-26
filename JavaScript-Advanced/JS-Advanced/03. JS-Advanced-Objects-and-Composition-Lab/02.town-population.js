function townPopulation(arr) {
  let obj = {};
  for (let el of arr) {
    let [city, population] = el.split("<->");
    population = Number(population);

    if (obj.hasOwnProperty(city)) {
      obj[city] += population;
    } else {
      obj[city] = population;
    }
  }
  let result = [];

  for (const key in obj) {
    result.push(`${key}: ${obj[key]}`);
  }

  return result.join("\n");
}

console.log(
  townPopulation([
    "Istanbul <-> 100000",
    "Honk Kong <-> 2100004",
    "Jerusalem <-> 2352344",
    "Mexico City <-> 23401925",
    "Istanbul <-> 1000",
  ])
);
