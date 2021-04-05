function building(input) {
  let index = 0;
  let floors = Number(input[index++]);
  let rooms = Number(input[index]);

  for (let i = floors; i > 0; i--) {
    let result = "";
    for (let j = 0; j < rooms; j++) {
      if (i === floors) {
        result += `L${i}${j} `;
      } else if (i % 2 === 0) {
        result += `O${i}${j} `;
      } else {
        result += `A${i}${j} `;
      }
    }
    console.log(result);
  }
}

building(["6", "4"]);
