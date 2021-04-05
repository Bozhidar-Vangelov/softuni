function removeOccurences(word, text) {
  while (text.includes(word)) {
    text = text.replace(word, "");
  }

  console.log(text);
}

removeOccurences("ice", "kicegiciceeb");
