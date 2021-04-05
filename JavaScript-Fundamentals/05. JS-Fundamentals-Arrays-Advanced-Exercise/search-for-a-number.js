function searchForANumber(elements, operations) {
  let numberOfElements = operations[0];
  let numbersToBeDeleted = operations[1];
  let wantedNumber = operations[2];

  let newElements = elements.slice(0, numberOfElements);

  newElements.splice(0, numbersToBeDeleted);

  let times = 0;

  for (let i = 0; i < newElements.length; i++) {
    if (newElements[i] === wantedNumber) {
      times++;
    }
  }

  return `Number ${wantedNumber} occurs ${times} times.`;
}

console.log(searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]));
