import {
  CHECK_HOURS,
  CHOOSE_DOCTOR,
  GET_ALL_APPOINTMENTS,
  GET_DOCTORS_LIST, GET_HISTORY,
} from "../actionTypes";

const initialState = {
  doctors: [],
  appointments: [],
  hours: [],
  policy: "",
  number: "",
  doctor: "",
};

export const appointment = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOCTORS_LIST:
      return { ...state, doctors: action.payload };
    case GET_ALL_APPOINTMENTS:
      return {
        ...state,
        appointments: action.appointments,
        policy: action.data.policy,
        number: action.data.number,
      };
    case CHOOSE_DOCTOR:
      return { ...state, doctor: action.doctor };
    case CHECK_HOURS:
      return {...state, hours: action.hours}
    case GET_HISTORY:
      return { ...state, history: action.payload}
    default:
      return state;
  }
};
