function convertToObject(json) {
  let convertedObj = JSON.parse(json);

  for (const key in convertedObj) {
    console.log(`${key}: ${convertedObj[key]}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
