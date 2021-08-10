import { html } from "../../node_modules/lit-html/lit-html.js";

export let detailsTemplate = (car) => html`<!-- Listing Details Page -->
  <section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
      <img src=${car.imageUrl} />
      <hr />
      <ul class="listing-props">
        <li><span>Brand:</span>${car.brand}</li>
        <li><span>Model:</span>${car.model}</li>
        <li><span>Year:</span>${car.year}</li>
        <li><span>Price:</span>${car.price}</li>
      </ul>

      <p class="description-para">${car.description}</p>

      <div class="listings-buttons">
        <a href="#" class="button-list">Edit</a>
        <a href="#" class="button-list">Delete</a>
      </div>
    </div>
  </section>`;
