function cats(input) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let i = 0; i < input.length; i++) {
    let catData = input[i].split(" ");
    let name, age;
    [name, age] = [catData[0], catData[1]];

    let cat = new Cat(name, age);
    cat.meow();
  }
}

cats(["Mellow 2", "Tom 5"]);
