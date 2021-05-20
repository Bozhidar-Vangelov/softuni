function solve() {
  let input = document.getElementById("text").value;
  let currentCase = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  function toCamelCase(str) {
    str = str.toLowerCase();

    let subStrArr = str.split(" ");
    let camelCase = "";

    subStrArr.forEach((word) => {
      if (subStrArr.indexOf(word) === 0) {
        camelCase += word;
      } else {
        camelCase += word[0].toUpperCase().concat(word.substring(1));
      }
    });

    return camelCase;
  }

  function toPascalCase(str) {
    str = str.toLowerCase();

    let subStrArr = str.split(" ");
    let pascalCase = "";

    subStrArr.forEach((word) => {
      pascalCase += word[0].toUpperCase().concat(word.substring(1));
    });

    return pascalCase;
  }

  if (currentCase === "Camel Case") {
    result.textContent = toCamelCase(input);
  } else if (currentCase === "Pascal Case") {
    result.textContent = toPascalCase(input);
  } else {
    result.textContent = "Error!";
  }
}
