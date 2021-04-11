function addAndRemove(arr) {
  let num = 1;
  let result = [];
  for (let element of arr) {
    if (element === "add") {
      result.push(num++);
    } else {
      result.pop(num++);
    }
  }

  return result.length === 0 ? "empty" : result.join("\n");
}

console.log(addAndRemove([["remove", "remove", "remove"]]));
