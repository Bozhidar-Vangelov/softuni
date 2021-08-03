import { render } from "../node_modules/lit-html/lit-html.js";
import { optionsTemplate } from "./templates.js";

let selectMenu = document.getElementById("menu");
let addItemForm = document.getElementById("form");

addItemForm.addEventListener("submit", addItem);

let items = [];

async function addItem(e) {
  e.preventDefault();
  let form = e.target;
  let formData = new FormData(form);

  let optionToPost = {
    text: formData.get("text"),
  };

  let url = "http://localhost:3030/jsonstore/advanced/dropdown";
  let response = await fetch(url, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(optionToPost),
  });
  let addedItem = await response.json();

  items.push(addedItem);
  render(optionsTemplate(items), selectMenu);
}

async function getItems() {
  let url = "http://localhost:3030/jsonstore/advanced/dropdown";
  let response = await fetch(url);
  let itemsObj = await response.json();
  items = Object.values(itemsObj);

  render(optionsTemplate(items), selectMenu);
}

getItems();
