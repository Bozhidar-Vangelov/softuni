function solve(input) {
  let email = input.shift();

  let [command, firstArgument] = input.shift().split(" ");

  while (command !== "Complete") {
    switch (command) {
      case "Make":
        if (firstArgument === "Upper") {
          email = email.toLocaleUpperCase();
          console.log(email);
        } else {
          email = email.toLocaleLowerCase();
          console.log(email);
        }
        break;
      case "GetDomain":
        let lastLetters = email.substring(email.length - firstArgument);
        console.log(lastLetters);
        break;
      case "GetUsername":
        if (email.includes("@")) {
          let userName = email.substring(0, email.indexOf("@"));
          console.log(userName);
        } else {
          console.log(`The email ${email} doesn't contain the @ symbol.`);
        }
        break;
      case "Replace":
        while (email.includes(firstArgument)) {
          email = email.replace(firstArgument, "-");
        }
        console.log(email);
        break;
      case "Encrypt":
        let result = "";
        for (let i = 0; i < email.length; i++) {
          result += email.charCodeAt(i) + " ";
        }
        console.log(result);
        break;
    }
    [command, firstArgument] = input.shift().split(" ");
  }
}

solve([
  "Mike123@somemail.com",
  "Make Upper",
  "GetDomain 3",
  "GetUsername",
  "Encrypt",
  "Complete",
]);

console.log("------");

solve([
  "AnotherMail.com",
  "Make Lower",
  "GetUsername",
  "Replace a",
  "Complete",
]);
