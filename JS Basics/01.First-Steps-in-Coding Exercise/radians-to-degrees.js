function radiansToDegrees(radiansInput){

    let radians = Number(radiansInput);
    let degrees = radians * 180 / Math.PI;

    console.log(degrees.toFixed(0));

}

radiansToDegrees("3.1416");