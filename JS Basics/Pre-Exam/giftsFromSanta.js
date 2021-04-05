function giftsFromSanta(arr) {
  n = Number(arr[0]);
  m = Number(arr[1]);
  s = Number(arr[2]);

  let result = "";

  for (let i = m; i >= n; i--) {
    if (i % 2 === 0 && i % 3 === 0) {
      if (i !== s) {
        result += i + " ";
      } else {
        break;
      }
    }
  }
  console.log(result);
}

giftsFromSanta(["1", "30", "15"]);
