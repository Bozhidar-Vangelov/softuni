import { loginTemplate } from "./loginPageTemplate.js";

let _router = undefined;
let _renderHandler = undefined;
let _authService = undefined;

function attach(router, renderHandler, authService) {
  _router = router;
  _renderHandler = renderHandler;
  _authService = authService;
}
// receives router, renderHandler and authService in the main document

async function submitHandler(e) {
  e.preventDefault();

  let formData = new FormData(e.target);

  let user = {
    email: formData.get("username"),
    username: formData.get("username"),
    password: formData.get("password"),
  };

  let loginResult = await _authService.login(user);

  _router.redirect("/home");
}

async function getView(context) {
  let form = {
    submitHandler,
  };

  let templateResult = loginTemplate(form);
  _renderHandler(templateResult);
}

export default {
  getView,
  attach,
};
