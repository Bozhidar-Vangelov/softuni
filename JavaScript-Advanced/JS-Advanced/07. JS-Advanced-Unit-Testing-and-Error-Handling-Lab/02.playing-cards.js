function playingCards(face, suit) {
  const validFaces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suitToString = {
    S: "\u2660 ",
    H: "\u2665",
    D: "\u2666",
    C: "\u2663",
  };

  if (!validFaces.includes(face)) {
    throw new Error("Error");
  } else if (!Object.keys(suitToString).includes(suit)) {
    throw new Error("Error");
  }

  return {
    face,
    suit,
    toString() {
      return `${face}${suitToString[suit]}`;
    },
  };
}

console.log(playingCards("A", "S").toString());
console.log(playingCards("10", "H").toString());
console.log(playingCards("1", "C").toString());
