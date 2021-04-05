function oldBooks(input) {
  let index = 0;
  let favouriteBook = input[index++];
  let books = input[index++];
  let booksCount = 0;
  let isFound = false;

  while (books !== "No More Books") {
    if (books === favouriteBook) {
      isFound = true;
      console.log(`You checked ${booksCount} books and found it.`);
      break;
    }
    books = input[index++];
    booksCount++;
  }

  if (!isFound) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${booksCount} books.`);
  }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
