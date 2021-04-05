function operationsBetweenNumbers(n1Input, n2Input, operatorInput) {
  let n1 = Number(n1Input);
  let n2 = Number(n2Input);
  let operator = operatorInput;

  let result = 0;

  switch (operator) {
    case "+":
    case "-":
    case "*":
      if (operator === "+") {
        result = n1 + n2;
      } else if (operator === "-") {
        result = n1 - n2;
      } else {
        result = n1 * n2;
      }

      let type;
      if (result % 2 === 0) {
        type = "even";
      } else {
        type = "odd";
      }
      console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`);
      break;
    case "/":
      if (operator === "/" && n2 !== 0) {
        result = n1 / n2;
        console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
      } else {
        console.log(`Cannot divide ${n1} by zero`);
      }
      break;
    case "%":
      if (operator === "%" && n2 !== 0) {
        result = n1 % n2;
        console.log(`${n1} ${operator} ${n2} = ${result}`);
      } else {
        console.log(`Cannot divide ${n1} by zero`);
      }
      break;
  }
}

operationsBetweenNumbers("10", "0", "%");
