function countTheWords(textInput) {
  let text = textInput;
  let words = 0;

  for (i = 0; i < text.length; i++) {
    let current = text[i];
    if (current === " ") {
      words++;
    }
  }
  words++;

  if (words > 10) {
    console.log(`The message is too long to be send! Has ${words} words.`);
  } else {
    console.log("The message was send successfully!");
  }
}

countTheWords("This message has ten words and you can send it!");
