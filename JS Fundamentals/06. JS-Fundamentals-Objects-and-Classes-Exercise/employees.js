function employees(input) {
  let employees = {};

  for (let element of input) {
    employees.name = element;
    employees.number = element.length;
    console.log(
      `Name: ${employees.name} -- Personal Number: ${employees.number}`
    );
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
