function fishTank (lenghtInput, widthImput, heightInput, percentagesInput){

    let lenght = Number(lenghtInput);
    let width = Number(widthImput);
    let height = Number(heightInput);
    let percentages = Number(percentagesInput) * 0.01;

    let totalLitres = (lenght * width * height) * 0.001;
    let neededLitres = totalLitres*(1-percentages);

    console.log(neededLitres);
}

fishTank("85", "75", "47", "17");