function numberPyramid(input) {
  let n = Number(input[0]);

  let isOver = false;
  let currentNum = 1;
  for (let row = 1; row <= n; row++) {
    let currentRow = "";
    for (let col = 1; col <= row; col++) {
      currentRow += `${currentNum} `;
      if (currentNum === n) {
        isOver = true;
        break;
      }

      currentNum++;
    }

    console.log(currentRow);
    if (isOver) {
      break;
    }
  }
}

numberPyramid(["7"]);
