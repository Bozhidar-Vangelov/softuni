function subtract() {
  let firstNum = document.querySelector("#firstNumber").value;
  let secondNum = document.querySelector("#secondNumber").value;

  let result = document.querySelector("#result");

  result.textContent = Number(firstNum) - Number(secondNum);
}
