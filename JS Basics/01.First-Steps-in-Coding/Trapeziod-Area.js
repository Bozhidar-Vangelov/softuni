function trapeziodArea(arg1, arg2, arg3){

    let b1 = Number(arg1);
    let b2 = Number(arg2);
    let h = Number(arg3);
    let area = Number((b1+b2) * h / 2);

    console.log(area.toFixed(2));
}

trapeziodArea(8, 13, 7);