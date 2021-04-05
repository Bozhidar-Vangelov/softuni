function revealWords(words, string) {
  words = words.split(", ");

  for (let word of words) {
    let template = "*".repeat(word.length);
    string = string.replace(template, word);
  }

  console.log(string);
}

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
