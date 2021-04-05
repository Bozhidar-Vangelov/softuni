function areaOfFigures(figureInput, numberInput, number2Input,) {

    let figure = figureInput;
    let number = Number(numberInput);
    let number2 = Number(number2Input);

    if (figure === "square") {
        let numberSquare = number * number;
        console.log(numberSquare.toFixed(3));
    }

    else if (figure === "rectangle") { 
        let numberRectangle = number * number2;
        console.log(numberRectangle.toFixed(3));
    }

    else if (figure === "circle") {
        let numberCircle = number * number * Math.PI
        console.log(numberCircle.toFixed(3));
    }

    else {
        let numberTriangle = (number * number2) / 2
        console.log(numberTriangle.toFixed(3));
    }



}

areaOfFigures("triangle", "4.5", "20");