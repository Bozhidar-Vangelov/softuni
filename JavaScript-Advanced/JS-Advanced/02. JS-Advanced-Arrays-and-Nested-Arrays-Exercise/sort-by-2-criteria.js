function sortBy2Criteria(arr) {
  return arr
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .join("\n");
}

console.log(
  sortBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"])
);
