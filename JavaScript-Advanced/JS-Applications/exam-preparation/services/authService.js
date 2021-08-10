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

async function getAllCars() {
  let result = await requestService(
    "http://localhost:3030/data/cars?sortBy=_createdOn%20desc"
  );
  return result;
}

async function getCarById(car) {
  let url = `http://localhost:3030/data/cars/${car.id}`;
  let result = await requestService(url);
  return result;
}

export default {
  setUser,
  getUser,
  login,
  register,
  logout,
  getAllCars,
  getCarById,
};
