function printNthElement(arr, step) {
  return arr.filter((_, i) => i % step === 0);
}

console.log(printNthElement(["5", "20", "31", "4", "20"], 2));
