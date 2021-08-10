import { detailsTemplate } from "./detailsTemplate.js";

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
  let carId = context.params._id;
  console.log(carId);
  let cars = await _authService.getAllCars();
  let neededCar = cars.filter((car) => car._id === carId);
  let templateresult = detailsTemplate(neededCar[0]);

  _renderHandler(templateresult);
}
// renders view and redirects to the given path

export default {
  getView,
  attach,
};
