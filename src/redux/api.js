import axios from "axios";
import { doAppointment } from "./actions/appointmentCreator";

const token = localStorage.getItem("token");

const API = axios.create({
  baseURL: "https://online-appointment-kg.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const request = {
  register: (data) => API.post("api/user/registration", data),
  login: (data) => API.post("api/auth", data),
  getDoctorsList: () => API.get("doctor"),
  doAppointmentApi: (data) => API.post("appointment", data),
  getAllAppointmentsApi: (data) => API.get(`appointment/${data}`),
  doAppointmentsApi: (data) => API.post("appointment", data),
};
