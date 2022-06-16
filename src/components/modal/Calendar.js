import { Datepicker } from "@mobiscroll/react";
import React, { useState } from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button } from "react-bootstrap";
import { useFormik } from "formik";
import { request } from "../../redux/api";
import {useDispatch, useSelector} from "react-redux";
import {checkHours} from "../../redux/actions/appointmentCreator";

const Calendarr = ({ next }) => {

  const [value, onChange] = useState(new Date());
  console.log(value.toISOString());
    const [hdate, setHdate] = useState();
  const state = useSelector((state) => state);
  console.log(state);
  const doctorId = state.doctor
    const cdate = value.toISOString().slice(0, 10)
  const data = {
    policy: state.policy,
    phone: state.number,
    doctorId: state.doctor,
      time: hdate,
    // time: value.toISOString(),


  };

  const dispatch = useDispatch()
    const hours = useSelector(state => state.hours)


    const submitAppointment = () => {
    console.log(data);
    request
      .doAppointmentApi(data)
      .then((res) => {
        console.log("succes: TRUE");
        next();
      })
      .catch((err) => console.log("error: ", err.message));
  };

  const getHours = () => {
        dispatch(checkHours(cdate, doctorId))
      console.log(cdate, doctorId)
    }
  return (
    <div>
      <h3>Выберите удобную вам дату и время</h3>
        <div className="calendar_cont">
            <Calendar onClickDay={getHours} onChange={onChange} value={value} />
            <div className="hour_cont">
                <div className="desc_cont">
                    <div className="desc_text"><span className="blue_box"></span> Занятые часы</div>
                    <div className="desc_text"><span className="gray_box"></span> Свободные часы</div>
                </div>
                <div className="hour_list">
                    {hours.map(hour => <button onClick={() => {setHdate(hour.workHour.replace("T", " ")); console.log(hour.workHour)}} disabled={!hour.available} className={hour.available ? "hour" : "blue_hour"}>{hour.workHour.slice(11, 17)}</button>)}
                </div>
            </div>
        </div>


      <Button onClick={submitAppointment} className="float-lg-end">
        Продолжить
      </Button>
    </div>
  );
};

export default Calendarr;
