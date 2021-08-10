import { html } from "../../node_modules/lit-html/lit-html.js";

export let navTemplate = (model) => html`<!-- Navigation -->
  <header>
    <nav>
      <a class="active" href="/home">Home</a>
      <a href="/all-listings">All Listings</a>
      <a href="/by-year">By Year</a>
      <!-- Guest users -->
      ${model.isLoggedIn ? loggedUsers(model) : guestUsers}
      <!-- Logged users -->
    </nav>
  </header>`;

let guestUsers = html`<div id="guest">
  <a href="/login">Login</a>
  <a href="/register">Register</a>
</div>`;

let loggedUsers = (model) => html`<div id="profile">
  <a>Welcome ${model.user.username}</a>
  <a href="/my-listings">My Listings</a>
  <a href="/create-listing">Create Listing</a>
  <a href="/home" @click=${model.logoutHandler}>Logout</a>
</div>`;
