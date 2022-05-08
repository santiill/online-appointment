import { useFormik } from "formik";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { chooseADoctor } from "../../redux/actions/appointmentCreator";
import "./baseModalStyles.css";

const Experts = ({ next }) => {
  const [choosenDoctor, setChoosenDoctor] = useState();
  console.log("doctor_id: ", choosenDoctor);
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();

  const submit = () => {
    if (choosenDoctor) {
      console.log("doctor: ", choosenDoctor);
      dispatch(chooseADoctor(choosenDoctor));
      next();
    }
  };

  const doctors = useSelector((state) => state.doctors);
  return (
    <div>
      <hr />
      <h4 className="px-2 mb-3">Выберите специалиста</h4>
      <ul className="experts">
        {doctors.map((doctor) => {
          return (
            <li
              className={
                choosenDoctor === doctor.id ? "doctor_active expert" : "expert"
              }
              onClick={() => setChoosenDoctor(doctor.id)}
              key={doctor.id}
            >
              <hr className="hr" />
              <h6 className="expert_name">
                {doctor.lastName} {doctor.firstName} {doctor.middleName}
              </h6>
              <p className="position">{doctor.speciality}</p>
              <p className="branch">{doctor.education}</p>
            </li>
          );
        })}
      </ul>
      <Button onClick={submit} className="float-lg-end">
        Продолжить
      </Button>
    </div>
  );
};

export default Experts;
