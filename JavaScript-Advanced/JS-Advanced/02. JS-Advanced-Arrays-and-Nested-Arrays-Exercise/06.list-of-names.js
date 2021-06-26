function listOfNames(list) {
  return list
    .sort((nameA, nameB) => nameA.localeCompare(nameB))
    .map((name, i) => `${i + 1}.${name}`)
    .join("\n");
}

console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));
