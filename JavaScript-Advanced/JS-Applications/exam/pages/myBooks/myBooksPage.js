import { myBooksTemplate } from "./myBooksTemplate.js";

let _router = undefined;
let _renderHandler = undefined;
let _authService = undefined;

function attach(router, renderHandler, authService) {
  _router = router;
  _renderHandler = renderHandler;
  _authService = authService;
}
// receives router and renderHandler in the main document

async function getView(context, next) {
  let userId = context.user._id;
  let myBooks = await _authService.getMyBooks(userId);
  let templateResult = myBooksTemplate(myBooks);
  _renderHandler(templateResult);
}
// renders view and redirects to the given path

export default {
  getView,
  attach,
};
