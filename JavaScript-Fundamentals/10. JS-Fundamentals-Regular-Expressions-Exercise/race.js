function race(input) {
  let racers = input.shift().split(", ");

  let raceInfo = {};

  for (let data of input) {
    let nameMatch = data.match(/[A-Za-z]/g);
    let name = nameMatch.join("");

    if (nameMatch && racers.includes(name)) {
      let distanceMatch = data.match(/[\d]/g);

      let distance = calculateDistance(distanceMatch);
      if (!raceInfo[name]) {
        raceInfo[name] = 0;
      }

      raceInfo[name] += distance;
    }
  }

  let sortedRace = Object.keys(raceInfo).sort(
    (a, b) => raceInfo[b] - raceInfo[a]
  );

  for (let index in sortedRace) {
    switch (index) {
      case "0":
        console.log(`1st place: ${sortedRace[0]}`);
        break;
      case "1":
        console.log(`1st place: ${sortedRace[1]}`);
        break;
      case "2":
        console.log(`1st place: ${sortedRace[2]}`);
        break;
    }
  }

  function calculateDistance(arr) {
    if (arr === null) {
      return 0;
    }

    let totalDistance = 0;
    arr.forEach((d) => (totalDistance += Number(d)));
    return totalDistance;
  }
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@",
  " R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
