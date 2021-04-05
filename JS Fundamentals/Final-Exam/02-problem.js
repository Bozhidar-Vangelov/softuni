function solve(input) {
  let regEx = /^([$%])([A-Z][a-z]{2,})\1: \[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/g;

  let count = input.shift();

  for (let i = 0; i < count; i++) {
    let match = input[i].match(regEx);

    if (match) {
      let digitsPattern = /[\d]+/g;
      let arr = match.join("");
      let rawWord = arr.split(" ")[0];
      let word = rawWord.substring(1, rawWord.length - 2);
      let digits = arr.match(digitsPattern);
      let result = "";
      for (let digit of digits) {
        result += String.fromCharCode(digit);
      }
      console.log(`${word}: ${result}`);
    } else {
      console.log("Valid message not found!");
    }
  }
}

solve([
  "4",
  "$Request$: [73]|[115]|[105]|",
  "%Taggy$: [73]|[73]|[73]|",
  "%Taggy%: [118]|[97]|[108]|",
  "$Request$: [73]|[115]|[105]|[32]|[75]|",
]);

console.log("-----");

solve([
  "3",
  "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
  "$tAGged$: [97][97][97]|",
  "$Request$: [73]|[115]|[105]|true",
]);
