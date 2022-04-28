import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllAppointments } from "../../redux/actions/appointmentCreator";
import { request } from "../../redux/api";
import Header from "../headers/Header";
import "./otherPages.css";

const Appoints = () => {
  const state = useSelector((state) => state.appointments);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.medicalCard);
  const [dat, setDat] = useState();
  const policy = user.medicalCard.policy;
  console.log(state);
  useEffect(() => {
    request
      .getAllAppointmentsApi(policy)
      .then((res) => setDat(res.data.content));
    console.log("vbnm: ", dat);
  }, []);

  return (
    <div>
      <Header />
      <div className="appoint_container">
        <ul className="appoint_list">
          {/* {dat.map((item) => {
            <li key={item.id} className="appoint_item">
              {item.firstName}
            </li>;
          })} */}
        </ul>
      </div>
    </div>
  );
};

export default Appoints;
