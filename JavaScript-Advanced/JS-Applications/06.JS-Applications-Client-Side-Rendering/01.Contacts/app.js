import { contacts } from "./contacts.js"
import { contactTemplate } from "./contactTemplate.js"
import { render } from "../node_modules/lit-html/lit-html.js"

let contactsDiv = document.getElementById("contacts");
let cards = contacts.map(contactTemplate);

render(cards, contactsDiv);
