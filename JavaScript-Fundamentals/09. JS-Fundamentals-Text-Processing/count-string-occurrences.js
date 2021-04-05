function countStrings(string, occurrance) {
  let words = string.split(" ");
  let counter = 0;

  for (let word of words) {
    if (word === occurrance) {
      counter++;
    }
  }
  console.log(counter);
}

countStrings("This is a word and it also is a sentence", "is");
