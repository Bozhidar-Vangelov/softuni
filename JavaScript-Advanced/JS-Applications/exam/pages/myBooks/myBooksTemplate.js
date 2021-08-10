import { html } from "../../node_modules/lit-html/lit-html.js";

export let myBooksTemplate = (
  books
) => html`<!-- My Books Page ( Only for logged-in users ) -->
  <section id="my-books-page" class="my-books">
    <h1>Dashboard</h1>
    ${books.length <= 0
      ? html`<p class="no-books">No books in database!</p>`
      : html`<ul class="my-books-list">
          ${books.map((book) => singleBook(book))}
        </ul>`}
  </section> `;

export let singleBook = (book) => html` <li class="otherBooks">
  <h3>${book.title}</h3>
  <p>Type: ${book.type}</p>
  <p class="img"><img src=${book.imageUrl} /></p>
  <a class="button" href="/data/books/${book._id}">Details</a>
</li>`;
