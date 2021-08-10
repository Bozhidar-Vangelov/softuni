import { requestService } from "./requestService.js";

let baseUrl = "http://localhost:3030/users";

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
  let result = await requestService(
    "http://localhost:3030/data/books?sortBy=_createdOn%20desc"
  );

  return result;
}

async function addBook(headers) {
  let result = await requestService(
    "http://localhost:3030/data/books",
    "Post",
    headers,
    true
  );

  return result;
}

async function deleteBook(id) {
  let result = await requestService(
    `http://localhost:3030/data/books/${id}`,
    "Delete",
    undefined,
    true
  );

  return result;
}

async function getBook(id) {
  let result = await requestService(`http://localhost:3030/data/books/${id}`);
  return result;
}

async function putBook(headers, id) {
  let result = await requestService(
    `http://localhost:3030/data/books/${id}`,
    "Put",
    headers,
    true
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
};
