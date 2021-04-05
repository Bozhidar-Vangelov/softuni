function sortNumbers(a, b, c) {
  let x = 0;

  if (b < a) {
    x = a;
    a = b;
    b = x;
  }

  if (c < a) {
    x = c;
    c = a;
    a = x;
  }

  if (c < b) {
    x = c;
    c = b;
    b = x;
  }
  if (a == b) {
    x = a;
    a = b;
    b = x;
  }
  if (a == c) {
    x = a;
    a = c;
    c = x;
  }
  if (b == c) {
    x = b;
    b = c;
    c = x;
  }
  console.log(c);
  console.log(b);
  console.log(a);
}

sortNumbers(2, 1, 3);
