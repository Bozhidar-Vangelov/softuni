function pieceOfPie(flavors, firstTarget, secondTarget) {
  let newFlavors = [];
  let firstIndex = flavors.indexOf(firstTarget);
  let secondIndex = flavors.indexOf(secondTarget);

  for (let i = firstIndex; i <= secondIndex; i++) {
    newFlavors.push(flavors[i]);
  }
  return newFlavors;
}

console.log(
  pieceOfPie(
    [
      "Pumpkin Pie",
      "Key Lime Pie",
      "Cherry Pie",
      "Lemon Meringue Pie",
      "Sugar Cream Pie",
    ],
    "Key Lime Pie",
    "Lemon Meringue Pie"
  )
);

console.log(
  pieceOfPie(
    [
      "Apple Crisp",
      "Mississippi Mud Pie",
      "Pot Pie",
      "Steak and Cheese Pie",
      "Butter Chicken Pie",
      "Smoked Fish Pie",
    ],
    "Pot Pie",
    "Smoked Fish Pie"
  )
);
