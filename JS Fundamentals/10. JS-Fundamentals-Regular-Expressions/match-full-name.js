function matchFullName(names) {
  let regEx = /\b[A-Z][a-z]{1,}\b/g;

  let validNames = [];

  while ((validName = regEx.exec(names)) !== null) {
    validNames.push(validName[0]);
  }

  console.log(validNames.join(" "));
}

matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
