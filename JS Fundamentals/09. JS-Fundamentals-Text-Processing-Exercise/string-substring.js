function stringSubstring(neededWord, str) {
  str = str.split(" ");
  let isFound = false;

  for (let word of str) {
    if (word.toLowerCase() === neededWord) {
      console.log(neededWord);
      isFound = true;
    }
  }

  if (!isFound) {
    console.log(`${neededWord} not found!`);
  }
}

stringSubstring("python", "JavaScript is the best programming language");
