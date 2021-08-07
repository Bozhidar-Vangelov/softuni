import { navTemplate } from "./navPageTemplate.js";

let _router = undefined;
let _renderHandler = undefined;
let _authService = undefined;

function attach(router, renderHandler, authService) {
  _router = router;
  _renderHandler = renderHandler;
}
// receives router and renderHandler in the main document

async function logoutHandler(e) {
  await _authService.logout();
  _router.redirect("/login");
}

async function getView(context, next) {
  let user = context.user;
  let viewModel = {
    isLoggedIn: user !== undefined,
  };

  let templateResult = navTemplate(viewModel);
  _renderHandler(templateResult);
  next();
}
// renders view and redirects to the given path

export default {
  attach,
  getView,
};
