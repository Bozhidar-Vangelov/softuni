function login(input) {
  let username = input.shift();
  let password = username.split("").reverse().join("");

  for (i = 0; i < input.length; i++) {
    if (input[i] === password) {
      console.log(`User ${username} logged in.`);
    } else {
      if (i === 3) {
        console.log(`User ${username} blocked!`);
        break;
      }
      console.log("Incorrect password. Try again.");
    }
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
