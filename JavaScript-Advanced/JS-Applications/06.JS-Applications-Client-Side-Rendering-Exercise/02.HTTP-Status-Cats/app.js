import { render } from "./../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";
import { catsTemplate } from "./catsTemplates.js";

let allCatsSection = document.getElementById("allCats");

render(catsTemplate(cats, statusCodeHandler), allCatsSection);

function statusCodeHandler(e) {
  let infoDiv = e.target.parentNode;
  let statusDiv = infoDiv.querySelector(".status");

  if (statusDiv.style.display === "none") {
    statusDiv.style.display = "block";
  } else {
    statusDiv.style.display = "none";
  }
}
