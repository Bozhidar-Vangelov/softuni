import { requestService } from "./requestService.js";

let baseUrl = "http://localhost:3030/users";
let booksUrl = "http://localhost:3030/data/books";
let likeUrl = "http://localhost:3030/data/likes";

function setUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getUser() {
  let user =
    localStorage.getItem("user") === null
      ? undefined
      : JSON.parse(localStorage.getItem("user"));

  return user;
}

async function login(user) {
  let result = await requestService(`${baseUrl}/login`, "Post", user);
  setUser(result);
}

async function register(user) {
  let result = await requestService(`${baseUrl}/register`, "Post", user);
  setUser(result);
}

async function logout(user) {
  await requestService(`${baseUrl}/logout`, "Get", undefined, true, true);
  localStorage.clear();
}

async function getAllBooks() {
  let result = await requestService(`${booksUrl}?sortBy=_createdOn%20desc`);

  return result;
}

async function addBook(headers) {
  let result = await requestService(booksUrl, "Post", headers, true);

  return result;
}

async function deleteBook(id) {
  let result = await requestService(
    `${booksUrl}/${id}`,
    "Delete",
    undefined,
    true
  );

  return result;
}

async function getBook(id) {
  let result = await requestService(`${booksUrl}/${id}`);
  return result;
}

async function putBook(headers, id) {
  let result = await requestService(`${booksUrl}/${id}`, "Put", headers, true);
  return result;
}

async function getMyBooks(userId) {
  let result = await requestService(
    `${booksUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
  );

  return result;
}

async function likeBook(headers) {
  let result = await requestService(likeUrl, "Post", headers, true);

  return result;
}

async function getLikes(bookId) {
  let result = await requestService(
    `${likeUrl}?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`
  );

  return result;
}

export default {
  setUser,
  getUser,
  login,
  register,
  logout,
  getAllBooks,
  addBook,
  deleteBook,
  getBook,
  putBook,
  getMyBooks,
  likeBook,
  getLikes,
};
