function rotateArray(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    let curr = arr.pop();
    arr.unshift(curr);
  }
  return arr.join(" ");
}

console.log(rotateArray(["1", "2", "3", "4"], 2));
