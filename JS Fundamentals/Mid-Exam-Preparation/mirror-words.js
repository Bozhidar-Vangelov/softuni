function mirrorWords(input) {
  let array = input.shift().split("");

  let mirrors = [];
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "#" && array[i] === array[i + 1]) {
      let wordOne = "";
      let wordTwo = "";
      let wordOneReversed = "";
      for (let j = i - 1; j > 0; j--) {
        if (array[j] !== "#") {
          wordOne += array[j];
        } else {
          break;
        }
      }

      for (let l = i + 2; l < array.length; l++) {
        if (array[l] !== "#") {
          wordTwo += array[l];
        } else {
          break;
        }
      }
      wordOneReversed = wordOne.split("").reverse().join("");
      let wordChecker = /^[^a-zA-Z]*$/;
      if (wordOne === wordTwo) {
        if (wordChecker.test(wordOne)) {
          mirrors.push(`${wordOneReversed} <=> ${wordTwo}`);
        }
      }

      if (wordOne.length === wordTwo.length && wordOne.length >= 3) {
        counter++;
      }
    } else if (array[i] === "@" && array[i] === array[i + 1]) {
      let wordOne = "";
      let wordTwo = "";
      let wordOneReversed = "";
      for (let j = i - 1; j > 0; j--) {
        if (array[j] !== "@") {
          wordOne += array[j];
        } else {
          break;
        }
      }

      for (let l = i + 2; l < array.length; l++) {
        if (array[l] !== "@") {
          wordTwo += array[l];
        } else {
          break;
        }
      }
      wordOneReversed = wordOne.split("").reverse().join("");
      let wordChecker = /^[^a-zA-Z]*$/;
      if (wordOne === wordTwo) {
        if (wordChecker.test(wordOne)) {
          mirrors.push(`${wordOneReversed} <=> ${wordTwo}`);
        }
      }
      if (wordOne.length === wordTwo.length && wordOne.length >= 3) {
        counter++;
      }
    }
  }

  if (counter <= 0) {
    console.log("No word pairs found!");
  } else {
    console.log(`${counter} word pairs found!`);
  }

  if (mirrors.length <= 0) {
    console.log("No mirror words!");
  } else {
    console.log(`The mirror words are:`);
    console.log(mirrors.join(", "));
  }
}

mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
