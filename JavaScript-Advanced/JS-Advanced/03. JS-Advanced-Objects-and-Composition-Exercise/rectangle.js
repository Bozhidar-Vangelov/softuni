function rectangle(width, height, color) {
  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  return {
    width: Number(width),
    height: Number(height),
    color: capitalize(color),
    calcArea() {
      return width * height;
    },
  };
}

let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
