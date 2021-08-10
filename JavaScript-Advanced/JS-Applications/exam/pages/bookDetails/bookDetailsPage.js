import { bookDetailsTemplate } from "./bookDetailsTemplate.js";

let _router = undefined;
let _renderHandler = undefined;
let _authService = undefined;
let _neededBook = undefined;

function attach(router, renderHandler, authService) {
  _router = router;
  _renderHandler = renderHandler;
  _authService = authService;
}
// receives router and renderHandler in the main document

async function deleteHandler(id, e) {
  await _authService.deleteBook(id);
  _router.redirect("/dashboard");
}

async function likeHandler(e) {
  let bookId = _neededBook._id;

  let headers = {
    bookId,
  };

  await _authService.likeBook(headers);
}

async function getView(context, next) {
  let bookId = context.params._id;
  _neededBook = await _authService.getBook(bookId);
  let user = context.user;

  let isOwner = false;

  if (user !== undefined && user._id === _neededBook._ownerId) {
    isOwner = true;
  }

  let currentLikes = await _authService.getLikes(bookId);
  _neededBook.currentLikes = currentLikes;

  let viewModel = {
    isLoggedIn: user !== undefined,
    deleteHandler,
    likeHandler,
    _neededBook,
    isOwner,
  };

  let templateResult = bookDetailsTemplate(viewModel);
  _renderHandler(templateResult);
}
// renders view and redirects to the given path

export default {
  getView,
  attach,
};
