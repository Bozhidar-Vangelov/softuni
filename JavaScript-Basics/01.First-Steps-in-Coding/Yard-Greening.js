function yardGreening (squareMeters){
    let squareMetersPrice = squareMeters * 7.61;
    let discount = 0.18 * squareMetersPrice ;
    let finalPrice = squareMetersPrice - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening("550");