function fruitMarket(strawberriesPriceInput, bananasInput, orangesInput, raspberriesInput, strawberriesKgInput){

    let strawberriesPrice = Number(strawberriesPriceInput);
    let bananasKg = Number(bananasInput);
    let orangesKg = Number(orangesInput);
    let raspberriesKg = Number(raspberriesInput);
    let strawberriesKg = Number(strawberriesKgInput);

    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberriesPrice - (raspberriesPrice * 0.40);
    let bananasPrice = raspberriesPrice - (raspberriesPrice * 0.80);

    let bananasTotal = bananasKg * bananasPrice;
    let orangesTotal = orangesKg * orangesPrice;
    let raspberriesTotal = raspberriesKg * raspberriesPrice;
    let strawberriesTotal = strawberriesKg * strawberriesPrice;

    let total = bananasTotal + orangesTotal + raspberriesTotal + strawberriesTotal;

    console.log(total)
    
}

fruitMarket("48", "10", "3.3", "6.5", "1.7");