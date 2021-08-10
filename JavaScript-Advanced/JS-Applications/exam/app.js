import page from "./node_modules/page/page.mjs";
import addBookPage from "./pages/addBook/addBookPage.js";
import bookDetailsPage from "./pages/bookDetails/bookDetailsPage.js";
import dashboardPage from "./pages/dashboard/dashboardPage.js";
import editBookPage from "./pages/editBook/editBookPage.js";
import loginPage from "./pages/login/loginPage.js";
import navPage from "./pages/nav/navPage.js";
import registerPage from "./pages/register/registerPage.js";
import { LitRenderer } from "./rendering/litRenderer.js";
import authService from "./services/authService.js";

console.log("here");

let appElement = document.getElementById("site-content"); // main index.html element
let navElement = document.getElementById("site-header"); // nav element

let litRenderer = new LitRenderer();

let navRenderHandler = litRenderer.createRenderHandler(navElement);
let appRenderHandler = litRenderer.createRenderHandler(appElement);
// creates render handler, which should be used for attach method()

dashboardPage.attach(page, appRenderHandler, authService);
navPage.attach(page, navRenderHandler, authService);
loginPage.attach(page, appRenderHandler, authService);
registerPage.attach(page, appRenderHandler, authService);
bookDetailsPage.attach(page, appRenderHandler, authService);
addBookPage.attach(page, appRenderHandler, authService);
editBookPage.attach(page, appRenderHandler, authService);

page(decorateUser);
page(navPage.getView);

page("/", "/dashboard");
page("/index.html", "/dashboard");

// // insert routes here
page("/dashboard", dashboardPage.getView);
page("/login", loginPage.getView);
page("/register", registerPage.getView);
// page("/all-listings", allListingsPage.getView);
page("/data/books/:_id", bookDetailsPage.getView, authService);
page("/add-book", addBookPage.getView);
page("/edit/:_id", editBookPage.getView);

page.start();

function decorateUser(context, next) {
  let user = authService.getUser();
  context.user = user;
  next();
}
