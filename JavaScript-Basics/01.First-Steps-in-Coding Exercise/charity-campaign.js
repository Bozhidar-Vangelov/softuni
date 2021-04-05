function charityCampaign(daysInput, bakersInput, cakesInput, wafflesInput, pancakesInput){

    let days = Number(daysInput);
    let bakers = Number(bakersInput);
    let cakes = Number(cakesInput);
    let waffles = Number(wafflesInput);
    let pancakes = Number(pancakesInput);

    let cakesPrice = cakes * 45;
    let wafflesPrice = waffles * 5.80;
    let pancakesPrice = pancakes * 3.20;

    let amountPerBaker = (cakesPrice + wafflesPrice + pancakesPrice) * bakers
    let totalAmount = amountPerBaker * days

    let finalAmount = totalAmount - (totalAmount / 8)

    console.log(finalAmount)

    
}

charityCampaign("23", "8", "14", "30", "16")