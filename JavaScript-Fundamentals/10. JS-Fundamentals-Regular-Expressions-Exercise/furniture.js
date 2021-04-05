function furniture(input) {
  let boughtFurnitures = [];
  let totalMoneySpend = 0;

  for (let data of input) {
    let validMatch = />>(?<product>[A-Z]*[a-z]*)<<(?<price>\d*.*\d*)!(?<quantity>\d)/g.exec(
      data
    );

    if (validMatch) {
      boughtFurnitures.push(validMatch.groups.product);
      totalMoneySpend +=
        Number(validMatch.groups.price) * Number(validMatch.groups.quantity);
    }
  }

  console.log("Bought furniture:");

  if (boughtFurnitures.length > 0) {
    console.log(boughtFurnitures.join("\n"));
  }

  console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
