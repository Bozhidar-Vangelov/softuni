function maxSequenceOfEqualElements(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let currentSequence = [array[i]];
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        currentSequence.push(array[j]);
      } else {
        break;
      }
    }

    if (result.length < currentSequence.length) {
      result = currentSequence;
    }
  }
  console.log(result.join(" "));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
