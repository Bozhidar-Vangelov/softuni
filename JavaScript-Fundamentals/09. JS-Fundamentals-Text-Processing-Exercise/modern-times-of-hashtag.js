function hashtag(str) {
  let words = str.split(" ");

  for (let word of words) {
    if (word.includes("#") && word.length > 1) {
      let pureWord = word.substring(1);
      if (containsOnlyLetters(pureWord)) {
        console.log(pureWord);
      }
    }
  }

  function containsOnlyLetters(w) {
    let isLetter = true;
    let code = w.charCodeAt();
    if (code < 65 || (code > 90 && code < 97) || code > 122) {
      isLetter = false;
    }

    return isLetter;
  }
}

hashtag("Nowadays everyone uses # to tag a #special word in #socialMedia");
