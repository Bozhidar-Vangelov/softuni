import page from "./node_modules/page/page.mjs";
import allListingsPage from "./pages/allListings/allListingsPage.js";
import detailsPage from "./pages/details/detailsPage.js";
import homePage from "./pages/home/homePage.js";
import loginPage from "./pages/login/loginPage.js";
import navPage from "./pages/nav/navPage.js";
import registerPage from "./pages/register/registerPage.js";
import { LitRenderer } from "./rendering/litRenderer.js";
import authService from "./services/authService.js";

let appElement = document.getElementById("site-content"); // main index.html element
let navElement = document.getElementById("nav"); // nav element

let litRenderer = new LitRenderer();

let navRenderHandler = litRenderer.createRenderHandler(navElement);
let appRenderHandler = litRenderer.createRenderHandler(appElement);
// creates render handler, which should be used for attach method()

homePage.attach(page, appRenderHandler);
navPage.attach(page, navRenderHandler, authService);
loginPage.attach(page, appRenderHandler, authService);
registerPage.attach(page, appRenderHandler, authService);
allListingsPage.attach(page, appRenderHandler, authService);
detailsPage.attach(page, appRenderHandler, authService);

page(decorateUser);
page(navPage.getView);

page("/", "/home");
page("/index.html", "/home");

// insert routes here
page("/home", homePage.getView);
page("/login", loginPage.getView);
page("/register", registerPage.getView);
page("/all-listings", allListingsPage.getView);
page("/details/:_id", detailsPage.getView);

page.start();

function decorateUser(context, next) {
  let user = authService.getUser();
  context.user = user;
  next();
}
