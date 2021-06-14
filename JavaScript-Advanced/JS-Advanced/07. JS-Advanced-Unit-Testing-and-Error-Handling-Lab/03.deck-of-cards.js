function deckOfCards(deck) {
  let result = [];
  let invalidCard = false;

  for (const card of deck) {
    let face = card.substring(0, card.length - 1);
    let suit = card[card.length - 1];

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
      invalidCard = true;
      console.log(`Invalid card: ${card}`);
    } else if (!Object.keys(suitToString).includes(suit)) {
      invalidCard = true;
      console.log(`Invalid card: ${card}`);
    }

    result.push(`${face}${suitToString[suit]}`);
  }

  if (!invalidCard) {
    console.log(result.join(" "));
  }
}

deckOfCards(["AS", "10D", "KH", "2C"]);
deckOfCards(["5S", "3D", "QD", "1C"]);
