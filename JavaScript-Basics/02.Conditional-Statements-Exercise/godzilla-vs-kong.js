function godzillaVsKong(budgetInput, dummiesInput, clothingPriceInput) {

    let budget = Number(budgetInput);
    let dummies = Number(dummiesInput);
    let clothingPrice = Number(clothingPriceInput);

    let decor = budget * 0.10;
    let totalClothingPrice = dummies * clothingPrice;
    let totalPrice = 0.0;

    if (dummies >= 150) {
        totalPrice = decor + (totalClothingPrice * 0.90);
    } else {
        totalPrice = decor + totalClothingPrice;
    }

    if (totalPrice <= budget) {
        let priceLeft = budget - totalPrice;
        console.log("Action!")
        console.log(`Wingard starts filming with ${priceLeft.toFixed(2)} leva left.`)
    } else {
        let priceNeeded = Math.abs(budget - totalPrice);
        console.log("Not enough money!")
        console.log(`Wingard needs ${priceNeeded.toFixed(2)} leva more.`)
    }

}

godzillaVsKong("15437.62", "186", "57.99");
