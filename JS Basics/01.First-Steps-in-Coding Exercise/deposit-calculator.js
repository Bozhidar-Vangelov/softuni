function depositCalculator(depositAmount, monthsAmount, percentagesAmount){

    let deposit = Number(depositAmount);
    let months = Number(monthsAmount);
    let percentages = Number(percentagesAmount) / 100;
    
    let totalAmount = deposit + months * ((deposit * percentages) / 12 );

    console.log(totalAmount)

}

depositCalculator("200", "3", "5.7");