function oddOccurrences(input) {
  let map = new Map();
  input
    .toLowerCase()
    .split(" ")
    .forEach((element) => {
      if (!map.has(element)) {
        map.set(element, 0);
      }

      map.set(element, map.get(element) + 1);
    });

  let arr = Array.from(map.keys()).filter((x) => map.get(x) % 2 !== 0);

  let output = "";

  for (let element of arr) {
    output += element + " ";
  }

  console.log(output);
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
