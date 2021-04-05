function pascalCaseSplitter(str) {
  let word = str[0];
  let splitted = [];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      word += str[i];
    } else {
      splitted.push(word);
      word = str[i];
    }
  }
  splitted.push(word);

  console.log(splitted.join(", "));
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
