function mergeArrays(firstArray, secondArray) {
  let result = "";
  for (let i = 0; i < firstArray.length; i++) {
    if (i === firstArray.length - 1) {
      result += Number(firstArray[i]) + Number(secondArray[i]);
    } else if (i % 2 === 0) {
      result += Number(firstArray[i]) + Number(secondArray[i]) + " - ";
    } else {
      result += firstArray[i] + secondArray[i] + " - ";
    }
  }
  console.log(result);
}

mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
