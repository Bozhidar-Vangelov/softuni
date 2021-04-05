function tradeCommissions(cityInput, salesVolumeInput) {
  let city = cityInput;
  let salesVolume = Number(salesVolumeInput);

  let commission = -1.0;

  if (city === "Sofia") {
    if (salesVolume >= 0 && salesVolume <= 500) {
      commission = salesVolume * 0.05;
    } else if (salesVolume > 500 && salesVolume <= 1000) {
      commission = salesVolume * 0.07;
    } else if (salesVolume > 1000 && salesVolume <= 10000) {
      commission = salesVolume * 0.08;
    } else if (salesVolume > 10000) {
      commission = salesVolume * 0.12;
    }
  } else if (city === "Varna") {
    if (salesVolume >= 0 && salesVolume <= 500) {
      commission = salesVolume * 0.045;
    } else if (salesVolume > 500 && salesVolume <= 1000) {
      commission = salesVolume * 0.075;
    } else if (salesVolume > 1000 && salesVolume <= 10000) {
      commission = salesVolume * 0.1;
    } else if (salesVolume > 10000) {
      commission = salesVolume * 0.13;
    }
  } else if (city === "Plovdiv") {
    if (salesVolume >= 0 && salesVolume <= 500) {
      commission = salesVolume * 0.055;
    } else if (salesVolume > 500 && salesVolume <= 1000) {
      commission = salesVolume * 0.08;
    } else if (salesVolume > 1000 && salesVolume <= 10000) {
      commission = salesVolume * 0.12;
    } else if (salesVolume > 10000) {
      commission = salesVolume * 0.145;
    }
  }
  if (commission >= 0) {
    console.log(commission.toFixed(2));
  } else {
    console.log("error");
  }
}

tradeCommissions("Plovdiv", "-20");
