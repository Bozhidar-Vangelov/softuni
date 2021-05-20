function search() {
  let input = document.querySelector("#searchText").value;
  const towns = Array.from(document.querySelectorAll("#towns li"));
  const result = document.querySelector("#result");
  let matches = 0;

  for (let town of towns) {
    if (town.textContent.includes(input)) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      matches++;
    }
  }

  result.textContent = `${matches} matches found`;
}
