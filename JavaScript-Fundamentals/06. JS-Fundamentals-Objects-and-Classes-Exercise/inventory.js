function inventory(input) {
  let heroes = [];

  class Hero {
    constructor(name, level, items) {
      this.name = name;
      this.level = level;
      this.items = items;
    }
  }

  for (const element of input) {
    let [name, level, items] = element.split(" / ");
    items = items
      .split(", ")
      .sort((a, b) => a.localeCompare(b))
      .join(", ");
    level = Number(level);
    let hero = new Hero(name, level, items);
    heroes.push(hero);
  }

  heroes
    .sort((a, b) => a.level - b.level)
    .forEach((hero) => {
      console.log(
        `Hero: ${hero.name} \n level => ${hero.level} \n items => ${hero.items}`
      );
    });
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
