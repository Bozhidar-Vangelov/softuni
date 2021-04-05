function tradeCommissions(cityInput, salesVolumeInput) {
  let city = cityInput;
  let salesVolume = Number(salesVolumeInput);
  let commission = 0;

  if (salesVolume >= 0 && salesVolume <= 500) {
    switch (city) {
      case "Sofia":
        salesVolume = salesVolume * 0.05;
        console.log(salesVolume);
        break;
    }
  }
}
tradeCommissions("Sofia", "1500");
