function evenPositionElement(arr) {
  let result = "";
  for (let i in arr) {
    if (i % 2 === 0) {
      result += arr[i] + " ";
    }
  }
  console.log(result);
}

evenPositionElement(["20", "30", "40", "50", "60"]);
