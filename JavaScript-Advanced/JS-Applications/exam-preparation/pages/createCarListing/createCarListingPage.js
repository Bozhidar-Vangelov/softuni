import { createCarListingTemplate } from "./createCarListingTemplate.js";

let _router = undefined;
let _renderHandler = undefined;

function attach(router, renderHandler) {
  _router = router;
  _renderHandler = renderHandler;
}
// receives router and renderHandler in the main document

async function getView(context, next) {
  let templateResult = createCarListingTemplate();
  _renderHandler(templateResult);
}
// renders view and redirects to the given path

export default {
  getView,
  attach,
};
