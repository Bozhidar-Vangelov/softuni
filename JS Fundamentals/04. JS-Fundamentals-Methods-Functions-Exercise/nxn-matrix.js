function nxnMatrix(num) {
  for (i = 0; i < num; i++) {
    let output = "";

    for (let j = 0; j < num; j++) {
      output += num + " ";
    }
    console.log(output);
  }
}

nxnMatrix(5);
