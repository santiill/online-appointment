import { Next } from "react-bootstrap/esm/PageItem";
import {
  CHECK_HOURS,
  CHOOSE_DOCTOR,
  GET_ALL_APPOINTMENTS,
  GET_DOCTORS_LIST, GET_HISTORY,
} from "../actionTypes";
import { request } from "../api";

export const getListOfDoctors = () => (dispatch) => {
  request.getDoctorsList().then((res) => {
    console.log("doctors_list: ", res.data.content);
    dispatch({ type: GET_DOCTORS_LIST, payload: res.data.content });
  });
};

export const doAppointment = (data) => {
  request.doAppointmentApi(data).then((res) => {
    if (res.status == 200) {
      console.log("successfully_did_appointment");
    } else {
      console.log("error: ", res.error.message);
    }
  });
};

export const getAllAppointments = (data, next) => (dispatch) => {
  request.getAllAppointmentsApi(data.policy).then((res) => {
    console.log("all_appointments: ", res);
    dispatch({
      type: GET_ALL_APPOINTMENTS,
      appointments: res.data.content,
      data: data,
    });
    next && next();
  });
};

export const chooseADoctor = (doctor) => (dispatch) => {
  console.log("dddd: ", doctor);
  dispatch({ type: CHOOSE_DOCTOR, doctor: doctor });
};

export const getHistory = () => (dispatch) => {
  request.getHistoryApi().then(res => {
    console.log("history: ", res);
    dispatch({ type: GET_HISTORY, payload: res.data });
  })

};


export const checkHours = (value, doctorId) => (dispatch) => {
  request.checkHoursApi(value, doctorId).then(res => {
    console.log("dddd: ", res);
    dispatch({type: CHECK_HOURS, hours: res.data})
  })
}
