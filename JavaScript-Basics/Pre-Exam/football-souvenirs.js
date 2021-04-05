function footballSouvenirs(teamInput, typeInput, quantitySouvenirsInput) {
  team = teamInput;
  type = typeInput;
  quantitySouvenirs = Number(quantitySouvenirsInput);
  let price = 0;

  if (team === "Argentina") {
    if (type === "flags") {
      price = quantitySouvenirs * 3.25;
      console.log(
        `Pepi bought ${quantitySouvenirs} ${type} of ${team} for ${price.toFixed(
          2
        )} lv.`
      );
    } else if (type === "caps") {
      price = quantitySouvenirs * 7.2;
      console.log(
        `Pepi bought ${quantitySouvenirs} ${type} of ${team} for ${price.toFixed(
          2
        )} lv.`
      );
    } else if (type === "posters") {
      price = quantitySouvenirs * 5.1;
      console.log(
        `Pepi bought ${quantitySouvenirs} ${type} of ${team} for ${price.toFixed(
          2
        )} lv.`
      );
    } else if (type === "stickers") {
      price = quantitySouvenirs * 1.25;
      console.log(
        `Pepi bought ${quantitySouvenirs} ${type} of ${team} for ${price.toFixed(
          2
        )} lv.`
      );
    } else {
      console.log("Invalid stock!");
    }
  } else if (team === "Brazil") {
    if (type === "flags") {
      price = quantitySouvenirs * 4.2;
      console.log(
        `Pepi bought ${quantitySouvenirs} ${type} of ${team} for ${price.toFixed(
          2
        )} lv.`
      );
    } else if (type === "caps") {
      price = quantitySouvenirs * 8.5;
      console.log(
        `Pepi bought ${quantitySouvenirs} ${type} of ${team} for ${price.toFixed(
          2
        )} lv.`
      );
    } else if (type === "posters") {
      price = quantitySouvenirs * 5.35;
      console.log(
        `Pepi bought ${quantitySouvenirs} ${type} of ${team} for ${price.toFixed(
          2
        )} lv.`
      );
    } else if (type === "stickers") {
      price = quantitySouvenirs * 1.2;
      console.log(
        `Pepi bought ${quantitySouvenirs} ${type} of ${team} for ${price.toFixed(
          2
        )} lv.`
      );
    } else {
      console.log("Invalid stock!");
    }
  } else if (team === "Croatia") {
    if (type === "flags") {
      price = quantitySouvenirs * 2.75;
      console.log(
        `Pepi bought ${quantitySouvenirs} ${type} of ${team} for ${price.toFixed(
          2
        )} lv.`
      );
    } else if (type === "caps") {
      price = quantitySouvenirs * 6.9;
      console.log(
        `Pepi bought ${quantitySouvenirs} ${type} of ${team} for ${price.toFixed(
          2
        )} lv.`
      );
    } else if (type === "posters") {
      price = quantitySouvenirs * 4.95;
      console.log(
        `Pepi bought ${quantitySouvenirs} ${type} of ${team} for ${price.toFixed(
          2
        )} lv.`
      );
    } else if (type === "stickers") {
      price = quantitySouvenirs * 1.1;
      console.log(
        `Pepi bought ${quantitySouvenirs} ${type} of ${team} for ${price.toFixed(
          2
        )} lv.`
      );
    } else {
      console.log("Invalid stock!");
    }
  } else if (team === "Denmark") {
    if (type === "flags") {
      price = quantitySouvenirs * 3.1;
      console.log(
        `Pepi bought ${quantitySouvenirs} ${type} of ${team} for ${price.toFixed(
          2
        )} lv.`
      );
    } else if (type === "caps") {
      price = quantitySouvenirs * 6.5;
      console.log(
        `Pepi bought ${quantitySouvenirs} ${type} of ${team} for ${price.toFixed(
          2
        )} lv.`
      );
    } else if (type === "posters") {
      price = quantitySouvenirs * 4.8;
      console.log(
        `Pepi bought ${quantitySouvenirs} ${type} of ${team} for ${price.toFixed(
          2
        )} lv.`
      );
    } else if (type === "stickers") {
      price = quantitySouvenirs * 0.9;
      console.log(
        `Pepi bought ${quantitySouvenirs} ${type} of ${team} for ${price.toFixed(
          2
        )} lv.`
      );
    } else {
      console.log("Invalid stock!");
    }
  } else {
    console.log("Invalid country!");
  }
}

footballSouvenirs("Brazil", "stickers", 5);
