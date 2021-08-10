import { allListingsTemplate } from "./allListingsTemplate.js";

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
  let cars = await _authService.getAllCars();

  _renderHandler(allListingsTemplate(cars));
}
// renders view and redirects to the given path

export default {
  getView,
  attach,
};
