function stringLength(...params) {
  let paramsLength = 0;
  for (let param of params) {
    paramsLength += param.length;
  }

  console.log(paramsLength);
  console.log(Math.floor(paramsLength / params.length));
}

stringLength("chocolate", "ice cream", "cake");
