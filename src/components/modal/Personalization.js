import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../../redux/actions/appointmentCreator";
import { PersonSchema } from "../../utils/Schemas";
import "./baseModalStyles.css";

const Personalization = ({ next }) => {
  // const [appoints, setAppoints] = useState(false);
  // const [button, setButton] = useState(true);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const formik = useFormik({
    initialValues: {
      policy: "",
      number: "",
    },
    validationSchema: PersonSchema,
    onSubmit: (data) => {
      if (data.policy.length == 12) {
        console.log("data: ", data);
        dispatch(getAllAppointments(data, next));
      }
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
            className="mb-1"
          />
          {formik.errors.policy ? (
            <Form.Text className="error">{formik.errors.policy}</Form.Text>
          ) : (
            <Form.Text>
              Введено символов {formik.values.policy.length}
            </Form.Text>
          )}
          {/* <Form.Text>Введено символов {formik.values.policy.length}</Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Номер телефона</Form.Label>
          <Form.Control
            onChange={formik.handleChange}
            name="number"
            type="text"
            placeholder="0999886677"
          />
          {formik.errors.number ? (
            <Form.Text className="error">{formik.errors.policy}</Form.Text>
          ) : (
            ""
          )}
        </Form.Group>

        <Button
          type="submit"
          disabled={!(formik.values.number && formik.values.number)}
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
