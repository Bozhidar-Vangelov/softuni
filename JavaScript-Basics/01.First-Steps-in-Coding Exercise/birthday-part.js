function birthdayParty(rentalInput){

    let rentalPrice = Number(rentalInput);
    let cakePrice = rentalPrice * 0.2;
    let drinksPrice = cakePrice - (cakePrice * 0.45);
    let animatorPrice = rentalPrice / 3;

    let totalPrice = rentalPrice + cakePrice + drinksPrice + animatorPrice;

    console.log(totalPrice)

}

birthdayParty(2250);