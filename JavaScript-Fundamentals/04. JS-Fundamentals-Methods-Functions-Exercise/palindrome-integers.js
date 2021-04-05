function palindromeIntegers(array) {
  for (let number of array) {
    let reversedNumber = reverseElement(number);
    console.log(number === reversedNumber);
  }

  function reverseElement(number) {
    let reversedValue = "";
    while (number > 0) {
      let lastDigit = number % 10;
      reversedValue += lastDigit;

      number = Math.trunc(number / 10);
    }

    return Number(reversedValue);
  }
}

palindromeIntegers([123, 323, 421, 121]);
