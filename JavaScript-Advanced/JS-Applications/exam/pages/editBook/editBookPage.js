import { editBookTemplate } from "./editBookTemplate.js";

let _router = undefined;
let _renderHandler = undefined;
let _authService = undefined;

function attach(router, renderHandler, authService) {
  _router = router;
  _renderHandler = renderHandler;
  _authService = authService;
}
// receives router and renderHandler in the main document

async function submitHandler(id, e) {
  e.preventDefault();
  console.log(id);

  let formData = new FormData(e.target);

  let title = formData.get("title");
  let description = formData.get("description");
  let imageUrl = formData.get("imageUrl");
  let type = formData.get("type");

  if (
    title.trim() === "" ||
    description.trim() === "" ||
    imageUrl.trim() === "" ||
    type.trim() === ""
  ) {
    return;
  }

  let headers = {
    title,
    description,
    imageUrl,
    type,
  };

  await _authService.putBook(headers, id);
  _router.redirect(`/edit${id}`);
}

async function getView(context, next) {
  let id = context.params._id;
  let book = await _authService.getBook(id);

  let form = {
    submitHandler,
    book,
  };

  let templateResult = editBookTemplate(form);
  _renderHandler(templateResult);
}
// renders view and redirects to the given path

export default {
  getView,
  attach,
};
