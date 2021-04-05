function rightPlace(firstString, char, secondString) {
  let transofmredString = "";

  for (i = 0; i < firstString.length; i++) {
    if (firstString[i] === "_") {
      transofmredString += char;
    } else {
      transofmredString += firstString[i];
    }
  }

  if (transofmredString === secondString) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}

rightPlace("Str_ng", "i", "String");
