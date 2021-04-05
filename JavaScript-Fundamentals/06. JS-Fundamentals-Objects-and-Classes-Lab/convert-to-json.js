function convertToJSON(name, lastName, hairColor) {
  let person = { name: name, lastName: lastName, hairColor: hairColor };
  let convertedPerson = JSON.stringify(person);

  console.log(convertedPerson);
}

convertToJSON("George", "Jones", "Brown");
