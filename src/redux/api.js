import axios from "axios";

const token = localStorage.getItem("token");

const API = axios.create({
  baseURL: "https://online-appointment-kg.herokuapp.com/api/",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const request = {
  register: (data) => API.post("user/registration", data),
  login: (data) => API.post("auth", data),
};
