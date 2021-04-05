function numberInRange(numInput) {
  let num = Number(numInput);

  if (num >= -100 && num <= 100 && num !== 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

numberInRange("0");
