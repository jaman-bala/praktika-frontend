import axios from "axios";

const token = localStorage.getItem("token");

export const instance = axios.create({
  baseURL: "https://dev-praktika.tsvs.kg/api/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
