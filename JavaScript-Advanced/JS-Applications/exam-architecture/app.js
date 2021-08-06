import page from "./node_modules/page/page.js";
import homePage from "./pages/home/homePage.js.js";
import loginPage from "./pages/login/loginPage.js";
import navPage from "./pages/nav/navPage.js";
import { LitRenderer } from "./rendering/litRenderer.js";
import authService from "./services/authService.js";

let appElement = document.getElementById("app"); // main index.html element
let navElement = document.getElementById("nav"); // nav element

let litRenderer = new LitRenderer();

let navRenderHandler = litRenderer.createRenderHandler(navElement);
let appRendererHandler = litRenderer.createRenderHandler(appElement);
// creates render handler, which should be used for attach method()

navPage.attach(page, navRenderHandler);
homePage.attach(page, appRendererHandler);
loginPage.attach(page, appRendererHandler, authService);

page(decorateUser);
page(navPage.getView);

page("/", "/home");
page("/index.html", "/home");

// insert routes here
page("/home", homePage.getView);
page("/login", loginPage.getView);

page.start();

function decorateUser(context, next) {
  let user = authService.getUser();
  context.user = user;
  next();
}
