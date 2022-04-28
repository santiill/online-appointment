/* import React from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, Page, getJson, setOptions } from "@mobiscroll/react";
import "./Calendar.css";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

function App() {
  const [multiple, setMultiple] = React.useState([
    "2022-04-11T00:00",
    "2022-04-16T00:00",
    "2022-04-17T00:00",
  ]);
  const min = "2022-04-25T00:00";
  const max = "2022-10-25T00:00";
  const [singleLabels, setSingleLabels] = React.useState([]);
  const [singleInvalid, setSingleInvalid] = React.useState([]);
  const [datetimeLabels, setDatetimeLabels] = React.useState([]);
  const [datetimeInvalid, setDatetimeInvalid] = React.useState([]);
  const [multipleLabels, setMultipleLabels] = React.useState([]);
  const [multipleInvalid, setMultipleInvalid] = React.useState([]);

  const onPageLoadingSingle = React.useCallback((event, inst) => {
    getPrices(event.firstDay, (bookings) => {
      setSingleLabels(bookings.labels);
      setSingleInvalid(bookings.invalid);
    });
  }, []);

  const onPageLoadingDatetime = React.useCallback((event, inst) => {
    getDatetimes(event.firstDay, (bookings) => {
      setDatetimeLabels(bookings.labels);
      setDatetimeInvalid(bookings.invalid);
    });
  }, []);

  const onPageLoadingMultiple = React.useCallback((event, inst) => {
    getBookings(event.firstDay, (bookings) => {
      setMultipleLabels(bookings.labels);
      setMultipleInvalid(bookings.invalid);
    });
  }, []);

  const getPrices = (d, callback) => {
    let invalid = [];
    let labels = [];

    getJson(
      "https://trial.mobiscroll.com/getprices/?year=" +
        d.getFullYear() +
        "&month=" +
        d.getMonth(),
      (bookings) => {
        for (let i = 0; i < bookings.length; ++i) {
          const booking = bookings[i];
          const d = new Date(booking.d);

          if (booking.price > 0) {
            labels.push({
              start: d,
              title: "$" + booking.price,
              textColor: "#e1528f",
            });
          } else {
            invalid.push(d);
          }
        }
        callback({ labels: labels, invalid: invalid });
      },
      "jsonp"
    );
  };

  const getDatetimes = (d, callback) => {
    let invalid = [];
    let labels = [];

    getJson(
      "https://trial.mobiscroll.com/getbookingtime/?year=" +
        d.getFullYear() +
        "&month=" +
        d.getMonth(),
      (bookings) => {
        for (let i = 0; i < bookings.length; ++i) {
          const booking = bookings[i];
          const bDate = new Date(booking.d);

          if (booking.nr > 0) {
            labels.push({
              start: bDate,
              title: booking.nr + " SPOTS",
              textColor: "#e1528f",
            });
            invalid = [...invalid, ...booking.invalid];
          } else {
            invalid.push(d);
          }
        }
        callback({ labels: labels, invalid: invalid });
      },
      "jsonp"
    );
  };

  const getBookings = (d, callback) => {
    let invalid = [];
    let labels = [];

    getJson(
      "https://trial.mobiscroll.com/getbookings/?year=" +
        d.getFullYear() +
        "&month=" +
        d.getMonth(),
      (bookings) => {
        for (let i = 0; i < bookings.length; ++i) {
          const booking = bookings[i];
          const d = new Date(booking.d);

          if (booking.nr > 0) {
            labels.push({
              start: d,
              title: booking.nr + " SPOTS",
              textColor: "#e1528f",
            });
          } else {
            invalid.push(d);
          }
        }
        callback({ labels: labels, invalid: invalid });
      },
      "jsonp"
    );
  };

  return (
    <Page className="md-calendar-booking">
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">
          Single date & appointment booking
        </div>
        <Datepicker
          display="inline"
          controls={["calendar"]}
          min={min}
          max={max}
          labels={singleLabels}
          invalid={singleInvalid}
          pages="auto"
          onPageLoading={onPageLoadingSingle}
        />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Select date & time</div>
        <Datepicker
          display="inline"
          controls={["calendar", "timegrid"]}
          min={min}
          max={max}
          minTime="08:00"
          maxTime="19:59"
          stepMinute={60}
          width={null}
          labels={datetimeLabels}
          invalid={datetimeInvalid}
          onPageLoading={onPageLoadingDatetime}
          cssClass="booking-datetime"
        />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">
          Booking multiple appointments
        </div>
        <Datepicker
          display="inline"
          controls={["calendar"]}
          value={multiple}
          min={min}
          max={max}
          labels={multipleLabels}
          invalid={multipleInvalid}
          pages="auto"
          selectMultiple={true}
          onPageLoading={onPageLoadingMultiple}
        />
      </div>
    </Page>
  );
}

export default App;
 */

import { Datepicker } from "@mobiscroll/react";
import React, { useState } from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button } from "react-bootstrap";
import { useFormik } from "formik";
import { request } from "../../redux/api";
import { useSelector } from "react-redux";

const Calendarr = ({ next }) => {
  //   const myLabels = React.useMemo(() => {
  //     return [
  //       {
  //         start: "2022-04-26",
  //         textColor: "#e1528f",
  //         title: "1 SPOTS",
  //       },
  //     ];
  //   }, []);

  //   const myInvalid = React.useMemo(() => {
  //     return [
  //       {
  //         start: "2022-04-25T08:00",
  //         end: "2022-04-25T13:00",
  //       },
  //       {
  //         start: "2022-04-25T15:00",
  //         end: "2022-04-25T17:00",
  //       },
  //       {
  //         start: "2022-04-25T19:00",
  //         end: "2022-04-25T20:00",
  //       },
  //       {
  //         start: "2022-04-25T14:00",
  //         end: "2022-04-25T20:00",
  //       },
  //     ];
  //   }, []);

  const [value, onChange] = useState(new Date());
  console.log(value);
  const state = useSelector((state) => state);
  console.log(state);
  const data = {
    policy: state.policy,
    phone: state.number,
    doctorId: state.doctor,
    time: value,
  };

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

  return (
    <div>
      <h3>Выберите удобную вам дату и время</h3>
      <Calendar className="mt-5" onChange={onChange} value={value} />
      <Button onClick={submitAppointment} className="float-lg-end">
        Продолжить
      </Button>
    </div>
  );
};

export default Calendarr;
