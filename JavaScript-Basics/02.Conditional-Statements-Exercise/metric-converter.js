function metricConverter(numberInput, metricInput, metric2Input) {

    let number = Number(numberInput);
    let metric = metricInput;
    let metric2 = metric2Input;

    if (metric === "mm" && metric2 === "m") {
        number = number / 1000
    } else if (metric === "mm" && metric2 === "cm") {
        number = number / 10
    } else if (metric === "cm" && metric2 === "mm") {
        number = number * 10
    } else if (metric === "cm" && metric2 === "m") {
        number = number / 100
    } else if (metric == "m" && metric2 === "mm") {
        number = number * 1000
    } else if (metric === "m" && metric2 === "cm") {
        number = number * 100
    }

    console.log(number.toFixed(3));

}

metricConverter("150", "m", "cm");

