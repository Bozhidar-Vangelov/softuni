function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  const input = document.querySelector("#searchField");
  const rows = document.querySelectorAll("tbody tr");

  function onClick() {
    for (let row of rows) {
      if (row.textContent.includes(input.value)) {
        row.setAttribute("class", "select");
      } else {
        row.removeAttribute("class");
      }
    }
  }
}
