function charactersInRange(firstSymbol, secondSymbol) {
  let first = convertSymbolsToNumber(firstSymbol);
  let second = convertSymbolsToNumber(secondSymbol);

  let min = Math.min(first, second);
  let max = Math.max(first, second);

  let allSymbols = createArrayOfCharacters(min, max);

  console.log(createStringOfSeparatedCharacters(allSymbols, " "));

  function convertSymbolsToNumber(char) {
    return char.charCodeAt(0);
  }

  function convertNumbersToCharcaters(number) {
    return String.fromCharCode(number);
  }

  function createArrayOfCharacters(start, end) {
    let characters = [];

    for (let i = start + 1; i < end; i++) {
      let symbol = convertNumbersToCharcaters(i);

      characters.push(symbol);
    }

    return characters;
  }

  function createStringOfSeparatedCharacters(array, separator) {
    let result = "";

    for (let index in array) {
      let character = array[index];

      if (index <= array.length - 2) {
        result += `${character}${separator}`;
      } else {
        result += character;
      }
    }
    return result;
  }
}

charactersInRange("#", ":");
