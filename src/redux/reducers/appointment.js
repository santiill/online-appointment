import {
  CHECK_HOURS,
  CHOOSE_DOCTOR,
  GET_ALL_APPOINTMENTS,
  GET_DOCTORS_LIST,
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
    default:
      return state;
  }
};
