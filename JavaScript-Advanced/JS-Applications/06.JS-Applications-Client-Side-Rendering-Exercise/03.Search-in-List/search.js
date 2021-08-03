import { render } from "./../node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";
import { resultTemplate, townsTemplate } from "./townsTemplates.js";

let townsDiv = document.getElementById("towns");
let searchButton = document.getElementById("search");
let resultDiv = document.getElementById("result");

render(townsTemplate(towns), townsDiv);

searchButton.addEventListener("click", search);

function search() {
  let townsItems = townsDiv.querySelectorAll("ul>li");
  let textInput = document.getElementById("searchText");
  let text = textInput.value.toLowerCase();

  townsItems.forEach((town) => town.classList.remove("active"));

  let active = Array.from(townsItems).filter((town) =>
    town.textContent.toLowerCase().includes(text)
  );

  active.forEach((town) => town.classList.add("active"));
  render(resultTemplate(active.length), resultDiv);
}
