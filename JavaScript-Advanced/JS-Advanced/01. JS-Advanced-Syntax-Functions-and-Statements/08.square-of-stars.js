function squareOfStars(n) {
  if (n === undefined) {
    for (let i = 0; i < 5; i++) {
      console.log("* * * * *");
    }
  } else {
    for (let i = 0; i < n; i++) {
      let line = "";
      for (let j = 0; j < n; j++) {
        line += "*" + " ";
      }
      console.log(line);
    }
  }
}

squareOfStars(3);
