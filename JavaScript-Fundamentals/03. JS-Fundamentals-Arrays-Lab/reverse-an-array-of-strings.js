function reverseAnArrayOfStrings(arrayOfStrings) {
  let output = "";

  for (let i = arrayOfStrings.length - 1; i >= 0; i--) {
    output += arrayOfStrings[i] + " ";
  }

  console.log(output);
}

reverseAnArrayOfStrings(["a", "b", "c", "d", "e"]);
