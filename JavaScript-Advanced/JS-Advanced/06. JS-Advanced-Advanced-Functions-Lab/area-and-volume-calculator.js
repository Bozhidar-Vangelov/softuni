function areaAndVolumeCalculator(area, vol, input) {
  const figures = JSON.parse(input);

  const result = [];

  for (let figure of figures) {
    const output = {
      area: area.call(figure),
      volume: vol.call(figure),
    };

    result.push(output);
  }
  return result;
}

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

console.log(
  areaAndVolumeCalculator(
    area,
    vol,
    `[
  {"x":"1","y":"2","z":"10"},
  {"x":"7","y":"7","z":"10"},
  {"x":"5","y":"2","z":"10"}
  ]`
  )
);
