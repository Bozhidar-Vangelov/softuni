function toyShop(tripPriceInput, puzzlesInput, dollsInput, bearsInput, minionsInput, trucksInput) {

    let tripPrice = Number(tripPriceInput);
    let puzzles = Number(puzzlesInput);
    let dolls = Number(dollsInput);
    let bears = Number(bearsInput);
    let minions = Number(minionsInput);
    let trucks = Number(trucksInput);

    let puzzlesPrice = puzzles * 2.60;
    let dollsPrice = dolls * 3;
    let bearsPrice = bears * 4.10;
    let minionsPrice = minions * 8.20;
    let trucksPrice = trucks * 2;

    let toysPrice = puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;
    let toysAmount = puzzles + dolls + bears + minions + trucks;

    if (toysAmount >= 50) { 
        toysPrice = toysPrice * 0.75
    }

    toysPrice = toysPrice * 0.90

    if (tripPrice <= toysPrice) {
        let leftMoney = Math.abs(tripPrice - toysPrice)
        console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`)
    }

    else {
        let neededMoney = Math.abs(tripPrice - toysPrice)
        console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`)
    }

}

toyShop("40.8", "20", "25", "30", "50", "10");