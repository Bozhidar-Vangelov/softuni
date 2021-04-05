function reverseString(string) {
  let splitString = string.split("");
  console.log(splitString);
  let reverseArray = splitString.reverse();
  console.log(reverseArray);
  let joinArray = reverseArray.join("");

  console.log(joinArray);
}

reverseString("Hello");
