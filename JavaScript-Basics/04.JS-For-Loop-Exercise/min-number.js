function minNumber(input) {
  let smallest = Number(input[1]);

  for (i = 1; i < input.length; i++) {
    let current = Number(input[i]);

    if (current < smallest) {
      smallest = current;
    }
  }
  console.log(smallest);
}

minNumber(["3", "-10", "20", "-30"]);
