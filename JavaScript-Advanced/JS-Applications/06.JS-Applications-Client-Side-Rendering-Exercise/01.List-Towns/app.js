import { render } from "./../node_modules/lit-html/lit-html.js";
import { townsTemplate } from "./townsTemplates.js";

let rootElement = document.getElementById("root");
let loadButton = document.getElementById("btnLoadTowns");

loadButton.addEventListener("click", displayTowns);

function displayTowns(e) {
  e.preventDefault();

  let townsInput = document.getElementById("towns");
  let townsValue = townsInput.value;
  let towns = townsValue.split(", ");

  render(townsTemplate(towns), rootElement);
}
