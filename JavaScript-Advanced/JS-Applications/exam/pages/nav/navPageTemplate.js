import { html } from "../../node_modules/lit-html/lit-html.js";

export let navTemplate = (model) => html` <!-- Navigation -->
  <nav class="navbar">
    <section class="navbar-dashboard">
      <a href="/dashboard">Dashboard</a>
      <!-- Guest users -->
      ${model.isLoggedIn ? loggedUsers(model) : guestUsers}
      <!-- Logged-in users -->
    </section>
  </nav>`;

let guestUsers = html`<div id="guest">
  <a class="button" href="/login">Login</a>
  <a class="button" href="/register">Register</a>
</div>`;

let loggedUsers = (model) => html`<div id="user">
  <span>Welcome, ${model.user.email}</span>
  <a class="button" href="/my-books">My Books</a>
  <a class="button" href="/add-book">Add Book</a>
  <a class="button" href="/dashboard" @click=${model.logoutHandler}>Logout</a>
</div>`;
