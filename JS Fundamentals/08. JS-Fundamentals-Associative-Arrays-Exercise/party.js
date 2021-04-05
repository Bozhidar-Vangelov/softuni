function party(input) {
  let guestsList = {
    vip: [],
    regular: [],
  };

  let name = input.shift();

  while (name !== "PARTY") {
    if (isNaN(name[0])) {
      guestsList.regular.push(name);
    } else {
      guestsList.vip.push(name);
    }

    name = input.shift();
  }

  input.forEach((guest) => {
    if (guestsList.vip.includes(guest)) {
      let index = guestsList.vip.indexOf(guest);
      guestsList.vip.splice(index, 1);
    } else if (guestsList.regular.includes(guest)) {
      let index = guestsList.regular.indexOf(guest);
      guestsList.regular.splice(index, 1);
    }
  });

  console.log(guestsList.vip.length + guestsList.regular.length);
  console.log(`${guestsList.vip.join("\n")}\n${guestsList.regular.join("\n")}`);
}

party([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
