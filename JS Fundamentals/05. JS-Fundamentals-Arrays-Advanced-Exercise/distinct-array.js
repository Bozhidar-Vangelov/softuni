function distinctArray(array) {
  let filtered = array.filter((item, pos) => array.indexOf(item) === pos);
  console.log(filtered.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
