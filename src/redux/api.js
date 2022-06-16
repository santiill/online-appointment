import axios from "axios";
import { doAppointment } from "./actions/appointmentCreator";
import {useParams} from "react-router-dom";

const token = localStorage.getItem("token");

const API = axios.create({
  baseURL: "https://online-appointment-kg.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
    // "Content-Type": "multipart/form-data",
  },
});
export const request = {
  register: (data) => API.post("api/user/registration", data),
  login: (data) => API.post("api/user/auth", data),
  getDoctorsList: () => API.get("api/doctor"),
  doAppointmentApi: (data) => API.post("api/appointment", data),
  getAllAppointmentsApi: (data) => API.get(`/api/appointment/policy/${data}`),
  checkHoursApi: (date, doctorId) => API.get('api/work-hour/check', { params: { date: date, id: doctorId } }),
  getHistoryApi: () => API.get("api/appointment/history")
  // doAppointmentsApi: (data) => API.post("appointment", data),
};
