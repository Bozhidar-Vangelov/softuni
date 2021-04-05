function vegetableMarket(arg1, arg2, arg3, arg4){

    let vegetablesPrice = Number(arg1);
    let fruitsPrice = Number(arg2);
    let vegetablesKilograms = Number(arg3);
    let fruitsKilograms = Number(arg4);

    let vegetablesSum = vegetablesPrice * vegetablesKilograms;
    let fruitsSum = fruitsPrice * fruitsKilograms;

    let totalSum = vegetablesSum + fruitsSum;
    let totalSumInEur = totalSum / 1.94

    console.log(totalSumInEur.toFixed(2));

}

vegetableMarket(0.194, 19.4, 10, 10);