import { html } from "../../node_modules/lit-html/lit-html.js";

export let bookDetailsTemplate = (viewModel) =>
  html`<!-- Details Page ( for Guests and Users ) -->
    <section id="details-page" class="details">
      <div class="book-information">
        <h3>${viewModel._neededBook.title}</h3>
        <p class="type">${viewModel._neededBook.type}</p>
        <p class="img"><img src=${viewModel._neededBook.imageUrl} /></p>
        <div class="actions">
          ${viewModel.isOwner
            ? html`<!-- Edit/Delete buttons ( Only for creator of this book )  -->
                <a
                  class="button"
                  href="#"
                  href="/edit/${viewModel._neededBook._id}"
                  >Edit</a
                >
                <a
                  class="button"
                  href="#"
                  @click=${(e) =>
                    viewModel.deleteHandler(viewModel._neededBook._id, e)}
                  >Delete</a
                >`
            : ""}

          <!-- Bonus -->
          <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
          ${viewModel.isLoggedIn && !viewModel.isOwner && !viewModel._isLiked
            ? html` <a
                class="button"
                href="#"
                @click=${(e) =>
                  viewModel.likeHandler(viewModel._neededBook._id, e)}
                >Like</a
              >`
            : ""}

          <!-- ( for Guests and Users )  -->
          <div class="likes">
            <img class="hearts" src="/images/heart.png" />
            <span id="total-likes"
              >Likes: ${viewModel._neededBook.currentLikes}</span
            >
          </div>
          <!-- Bonus -->
        </div>
      </div>
      <div class="book-description">
        <h3>Description:</h3>
        <p>${viewModel._neededBook.description}</p>
      </div>
    </section>`;
