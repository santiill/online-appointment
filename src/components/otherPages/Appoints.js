import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllAppointments } from "../../redux/actions/appointmentCreator";
import { request } from "../../redux/api";
import Header from "../headers/Header";
import "./otherPages.css";

const Appoints = () => {
  const state = useSelector((state) => state.appointments);
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  console.log(user.medicalCard);
  const [dat, setDat] = useState([]);
  const policy = user.medicalCard;
  console.log("state: ", state);
  useEffect(() => {
    // request?.getAllAppointmentsApi(policy).then((res) => setDat(res.data));\
    dispatch(getAllAppointments(policy));
    console.log("vbnmgg: ", state);
  }, []);

  return (
    <div>
      <Header />
      <div className="appoint_container">
        <ul className="appoint_list">
          {state.map((item) => {
            return (
              <li key={item.id} className="appoint_item">
                {item.attendingDoctor.firstName} {item.attendingDoctor.lastName}{" "}
                {item.attendingDoctor.middleName}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Appoints;
