import { registerTemplate } from "./registerTemplate.js";

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

  let email = formData.get("email");
  let password = formData.get("password");
  let repeatPassword = formData.get("confirm-pass");

  if (
    email.trim() === "" ||
    password.trim() === "" ||
    repeatPassword.trim() === ""
  ) {
    return;
  }

  let user = {
    email,
    password,
    repeatPassword,
  };

  let registerResult = await _authService.register(user);
  _router.redirect("/dashboard");
}

async function getView() {
  let form = {
    submitHandler,
  };

  let templateResult = registerTemplate(form);
  _renderHandler(templateResult);
}

export default {
  getView,
  attach,
};
