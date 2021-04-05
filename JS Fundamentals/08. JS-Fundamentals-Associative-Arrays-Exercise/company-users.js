function companyUsers(input) {
  let companiesInfo = {};

  for (let line of input) {
    let [company, user] = line.split(" -> ");

    if (!companiesInfo.hasOwnProperty(company)) {
      companiesInfo[company] = new Set();
    }
    companiesInfo[company].add(user);
  }

  let sorted = Object.entries(companiesInfo);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  for (let element of sorted) {
    console.log(element[0]);
    for (let number of element[1]) {
      console.log(`-- ${number}`);
    }
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
