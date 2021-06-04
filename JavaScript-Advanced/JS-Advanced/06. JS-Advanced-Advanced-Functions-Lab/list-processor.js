function listProcessor(commands) {
  let newArr = [];
  for (const item of commands) {
    const [command, str] = item.split(" ");

    switch (command) {
      case "add":
        newArr.push(str);
        break;
      case "remove":
        newArr = newArr.filter((e) => e !== str);
        break;
      case "print":
        return newArr.join(",");
    }
  }
}

console.log(
  listProcessor([
    "add hello",
    "add again",
    "remove hello",
    "add again",
    "print",
  ])
);

console.log(
  listProcessor([
    "add pesho",
    "add george",
    "add peter",
    "remove peter",
    "print",
  ])
);
