function filterEmployees(data, criteria) {
  const users = JSON.parse(data);
  const [property, value] = criteria.split("-");
  let counter = 0;
  let filtered = [];

  for (const user of users) {
    if (user[property] === value && criteria === "all") {
      filtered.push(
        `${counter}. ${user.first_name} ${user.last_name} - ${user.email}`
      );
      counter++;
    }
  }

  return filtered.join("\n");
}

console.log(
  filterEmployees(
    `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    "gender-Female"
  )
);
