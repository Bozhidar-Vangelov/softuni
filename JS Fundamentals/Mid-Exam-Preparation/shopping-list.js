function shoppingList(input) {
  let initialList = input.shift().split("!");

  let [command, item, secondItem] = input.shift().split(" ");

  while (command !== "Go") {
    if (command === "Urgent" && !initialList.includes(item)) {
      initialList.unshift(item);
    } else if (command === "Unnecessary" && initialList.includes(item)) {
      initialList.splice(initialList.indexOf(item), 1);
    } else if (command === "Correct" && initialList.includes(item)) {
      initialList.splice(initialList.indexOf(item), 1, secondItem);
    } else if (command === "Rearrange" && initialList.includes(item)) {
      initialList.splice(initialList.indexOf(item), 1);
      initialList.push(item);
    }

    [command, item, secondItem] = input.shift().split(" ");
  }

  return initialList.join(", ");
}
console.log(
  shoppingList([
    "Milk!Pepper!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!",
  ])
);
console.log("------------------------------------");
console.log(
  shoppingList([
    "Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!",
  ])
);
