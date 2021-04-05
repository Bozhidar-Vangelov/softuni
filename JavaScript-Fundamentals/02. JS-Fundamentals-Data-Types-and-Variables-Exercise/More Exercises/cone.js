function cone(coneRadiustInput, coneHeightInput) {
  let coneRadius = Number(coneRadiustInput);
  let coneHeight = Number(coneHeightInput);

  let s = Math.sqrt(coneRadius * coneRadius + coneHeight * coneHeight);
  let volume = (Math.PI * coneRadius * coneRadius * coneHeight) / 3;
  let area = Math.PI * coneRadius * (coneRadius + s);

  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${area.toFixed(4)}`);
}

cone(3, 5);
