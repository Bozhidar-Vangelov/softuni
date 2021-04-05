function bombNumbers(seq, bomb) {
  let specialNum = bomb[0];
  let power = bomb[1];

  while (seq.includes(specialNum)) {
    let index = seq.indexOf(specialNum);
    let elementsToRemove = power * 2 + 1;
    let startIndex = index - power;

    if (startIndex < 0) {
      elementsToRemove += startIndex;
      startIndex = 0;
    }
    seq.splice(startIndex, elementsToRemove);
  }

  console.log(seq.reduce((a, b) => a + b, 0));
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
