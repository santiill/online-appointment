import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../../redux/actions/appointmentCreator";
import "./baseModalStyles.css";

const Personalization = ({ next }) => {
  // const [appoints, setAppoints] = useState(false);
  // const [button, setButton] = useState(true);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  setTimeout(() => {
    console.log("policy_state: ", state);
  }, 20000);

  const formik = useFormik({
    initialValues: {
      policy: "",
      number: "",
    },
    onSubmit: (data) => {
      console.log("data: ", data);
      dispatch(getAllAppointments(data, next));
      // setAppoints(true);
      // setButton(false);
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit} className="mt-5 mb-4">
        <h5 className="text-center font-weight-bold">Ваши данные</h5>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>ПОЛИС</Form.Label>
          <Form.Control
            onChange={formik.handleChange}
            name="policy"
            type="text"
            placeholder="Введите полис"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Номер телефона</Form.Label>
          <Form.Control
            onChange={formik.handleChange}
            name="number"
            type="text"
            placeholder="0999886677"
          />
        </Form.Group>
        <Button
          type="submit"
          // onClick={() => {
          //   setAppoints(true);
          //   setButton(false);
          // }}
          className="float-lg-end"
        >
          Продолжить
        </Button>
      </Form>
    </div>
  );
};

export default Personalization;
