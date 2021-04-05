function towns(input) {
  for (let element of input) {
    let [town, latitude, longitude] = element.split(" | ");
    let towns = {
      town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };

    console.log(towns);
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
