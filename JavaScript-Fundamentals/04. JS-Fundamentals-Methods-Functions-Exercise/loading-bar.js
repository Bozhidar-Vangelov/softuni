function loadingBar(percentages) {
  let symbols = "";
  for (let i = 0; i < percentages; i += 10) {
    symbols += "%";
  }

  let dots = "";

  for (let j = percentages; j < 100; j += 10) {
    dots += ".";
  }

  if (percentages < 100) {
    console.log(`${percentages}% [${symbols}${dots}]`);
    console.log("Still loading...");
  } else {
    console.log(`${percentages}% Complete!`);
    console.log(`[${symbols}]`);
  }
}

loadingBar(100);
