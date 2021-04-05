function cutAndReverse(str) {
  str = str.split("").reverse().join("");

  let firstHalf = str.substring(str.length / 2);

  let secondHalf = str.substring(0, str.length / 2);

  console.log(`${firstHalf}\n${secondHalf}`);
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
