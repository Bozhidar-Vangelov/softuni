function sumDigits(num) {
  let sum = 0;

  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  console.log(sum);
}

sumDigits(245678);
