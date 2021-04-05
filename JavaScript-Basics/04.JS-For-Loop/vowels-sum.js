function vowelsSum(wordInput) {
  let word = wordInput;
  let result = 0;

  for (let i = 1; i <= word.length; i++) {
    let char = word[i];

    switch (char) {
      case "a":
        result += 1;
        break;
      case "e":
        result += 2;
        break;
      case "i":
        result += 3;
        break;
      case "o":
        result += 4;
        break;
      case "u":
        result += 5;
        break;
    }
  }
  console.log(result);
}

vowelsSum("beer");
