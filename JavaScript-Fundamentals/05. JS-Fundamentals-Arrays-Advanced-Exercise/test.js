function countInArray(array, what) {
  return array.filter((item) => item == what).length;
}

console.log(countInArray([1, 2, 2, 2]));
