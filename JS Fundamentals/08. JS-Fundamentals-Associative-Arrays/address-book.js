function addressBook(input) {
  let book = {};

  for (const line of input) {
    let [name, address] = line.split(":");

    book[name] = address;
  }

  let transformedBook = Object.entries(book);

  let sorted = transformedBook.sort((a, b) => {
    let nameA = a[0];
    let nameB = b[0];

    return nameA.localeCompare(nameB);
  });

  for (const key of sorted) {
    console.log(`${key[0]} -> ${key[1]}`);
  }
}

addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
