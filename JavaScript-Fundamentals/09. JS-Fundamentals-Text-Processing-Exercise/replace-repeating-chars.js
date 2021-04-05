function replaceRepeatingChars(chars) {
  let result = "";
  for (let i = 0; i <= chars.length; i++) {
    if (chars[i] !== chars[i + 1]) {
      result += chars[i];
    }
  }

  console.log(result);
}

replaceRepeatingChars("qqqwerqwecccwd");
