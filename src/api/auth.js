import API from ".";

export const login = (data) => API.post("/auth/login", data);

export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setInStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
