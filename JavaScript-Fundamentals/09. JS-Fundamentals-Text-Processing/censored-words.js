function censoredWords(sentence, censoredWord) {
  while (sentence.includes(censoredWord)) {
    let replaced = sentence.replace(
      censoredWord,
      "*".repeat(censoredWord.length)
    );

    sentence = replaced;
  }

  console.log(sentence);
}

censoredWords("A small sentence with some words", "small");
