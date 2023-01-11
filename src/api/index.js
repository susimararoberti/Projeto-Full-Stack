import axios from "axios";
import { getFromStorage } from "./auth";

const API = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10000,
});

API.interceptors.request.use((config) => {
  const user = getFromStorage("user");
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: user?.accessToken ? `Bearer ${user?.accessToken}` : "",
    },
  };
});

export default API;

export const APICONTACTS = axios.create({
  baseURL: "https://randomuser.me/api",
  timeout: 10000,
});

export const APIDOGS = axios.create({
  baseURL: "https://dog.ceo/api/breeds/image/random",
  timeout: 10000,
});
