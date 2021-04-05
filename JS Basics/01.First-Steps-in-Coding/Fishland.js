function fishland(arg1, arg2, arg3, arg4, arg5){

    let mackerelPrice = Number(arg1);
    let spratPrice = Number(arg2);
    let bonitoKgs = Number(arg3);
    let horseMackerelKgs = Number(arg4);
    let musselsKgs = Number(arg5);

    let bonitoPrice = mackerelPrice + mackerelPrice * 0.60
    let horseMackerelPrice = spratPrice + spratPrice * 0.80
    let musselsPrice = 7.50

    let bonitoTotal = bonitoKgs * bonitoPrice
    let horseMackerelTotal = horseMackerelKgs * horseMackerelPrice
    let musselsTotal = musselsKgs * musselsPrice

    let totalprice = bonitoTotal + horseMackerelTotal + musselsTotal

    console.log(totalprice.toFixed(2))

}

fishland(6.90, 4.20, 1.5, 2.5, 1);