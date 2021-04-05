function solve(input) {
  let capacity = input.shift();

  let users = {};

  let [command, name, firstArgument, secondArgument] = input.shift().split("=");

  while (command !== "Statistics") {
    switch (command) {
      case "Add":
        if (!users.hasOwnProperty(name)) {
          users[name] = {
            sent: Number(firstArgument),
            received: Number(secondArgument),
          };
        }
        break;
      case "Message":
        if (users.hasOwnProperty(name) && users.hasOwnProperty(firstArgument)) {
          users[name].sent++;
          users[firstArgument].received++;
        }

        if (users[name].sent + users[name].received >= capacity) {
          delete users[name];
          console.log(`${name} reached the capacity!`);
        }

        if (
          users[firstArgument].received + users[firstArgument].sent >=
          capacity
        ) {
          delete users[firstArgument];
          console.log(`${firstArgument} reached the capacity!`);
        }
        break;
      case "Empty":
        if (name === "All") {
          users = {};
        } else {
          delete users[name];
        }
        break;
    }
    [command, name, firstArgument, secondArgument] = input.shift().split("=");
  }

  let sortedUsers = Object.entries(users).sort(
    ([nameA, messagesA], [nameB, messagesB]) => {
      return (
        messagesB.received - messagesA.received || nameA.localeCompare(nameB)
      );
    }
  );

  let usersCount = sortedUsers.length;

  console.log(`Users count: ${usersCount}`);

  for (let user of sortedUsers) {
    console.log(`${user[0]} - ${user[1].received + user[1].sent}`);
  }
}

solve([
  "10",
  "Add=Mark=5=4",
  "Add=Clark=3=5",
  "Add=Berg=9=0",
  "Add=Kevin=0=0",
  "Message=Berg=Kevin",
  "Statistics",
]);

console.log("--------");

solve([
  "20",
  "Add=Mark=3=9",
  "Add=Berry=5=5",
  "Add=Clark=4=0",
  "Empty=Berry",
  "Add=Blake=9=3",
  "Add=Michael=3=9",
  "Add=Amy=9=9",
  "Message=Blake=Amy",
  "Message=Michael=Amy",
  "Statistics",
]);

console.log("--------");

solve([
  "12",
  "Add=Bonnie=3=5",
  "Add=Johny=4=4",
  "Empty=All",
  "Add=Bonnie=3=3",
  "Statistics",
]);
