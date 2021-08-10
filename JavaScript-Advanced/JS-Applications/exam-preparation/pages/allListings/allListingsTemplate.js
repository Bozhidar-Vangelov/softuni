import { html } from "../../node_modules/lit-html/lit-html.js";

export let allListingsTemplate = (cars) => html`<!-- All Listings Page -->
  <section id="car-listings">
      ${
        cars.length <= 0
          ? html`<p class="no-cars">No cars in database.</p>`
          : html`${cars.map((car) => singleCarTemplate(car))}}`
      }
      
      <!-- Display if there are no records -->
      
    </div>
  </section>`;

export let singleCarTemplate = (car) => html`
  <h1>Car Listings</h1>
  <div class="listings">
    <!-- Display all records -->
    <div class="listing">
      <div class="preview">
        <img src="${car.imageUrl}" />
      </div>
      <h2>${car.brand} ${car.model}</h2>
      <div class="info">
        <div class="data-info">
          <h3>Year: ${car.year}</h3>
          <h3>Price: ${car.price} $</h3>
        </div>
        <div class="data-buttons">
          <a href="/details/${car._id}" class="button-carDetails">Details</a>
        </div>
      </div>
    </div>
  </div>
`;
