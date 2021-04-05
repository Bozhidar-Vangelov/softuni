function wordsTracker(words) {
  let trackedWords = words.shift().split(" ");

  let countedWords = {};

  for (let word of trackedWords) {
    countedWords[word] = 0;
  }

  for (let word of words) {
    if (Object.keys(countedWords).includes(word)) {
      countedWords[word]++;
    }
  }

  let sorted = Object.keys(countedWords).sort(
    (a, b) => countedWords[b] - countedWords[a]
  );

  for (let key of sorted) {
    console.log(`${key} - ${countedWords[key]}`);
  }
}

wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
