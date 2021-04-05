function problemTwo(input) {
  let friends = input.shift().split(", ");
  let numberOfLost = 0;
  let numberOfBlacklisted = 0;

  let [command, first, second] = input.shift().split(" ");

  while (command !== "Report") {
    if (command === "Blacklist") {
      let index = friends.indexOf(first);
      if (index > -1) {
        friends.splice(index, 1, "Blacklisted");
        console.log(`${first} was blacklisted.`);
        numberOfBlacklisted++;
      } else {
        console.log(`${first} was not found.`);
      }
    } else if (command === "Error") {
      let name = friends[first];
      if (name !== "Blacklisted" && name !== "Lost") {
        friends.splice(first, 1, "Lost");
        console.log(`${name} was lost due to an error.`);
        numberOfLost++;
      }
    } else if (command === "Change") {
      if (first >= 0 && first < friends.length) {
        console.log(`${friends[first]} changed his username to ${second}.`);
        friends.splice(first, 1, second);
      }
    }
    [command, first, second] = input.shift().split(" ");
  }

  console.log(`Blacklisted names: ${numberOfBlacklisted} `);
  console.log(`Lost names: ${numberOfLost} `);
  console.log(friends.join(" "));
}

problemTwo([
  "Mike, John, Eddie",
  "Blacklist Mike",
  "Error 0",
  "Error 1",
  "Change 2 Mike123",
  "Report",
]);
