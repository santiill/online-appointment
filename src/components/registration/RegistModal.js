import s from "./Register.module.css";
import { Button, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import { registration } from "../../redux/actions/auth_registration";
import RegistrationHeader from "../headers/RegistrationHeader";
import AuthModal from "../auth/AuthModal";
import { useState } from "react";

function RegistModal({ setShow, show }) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      username: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log("data: ", data);
      registration(data);
    },
  });

  return (
    <>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <RegistrationHeader />
        <Modal.Body>
          <h3 className={s.regist_title}>Регистрация</h3>
          <div className={s.registration}>
            <div className={s.registration_cont}>
              <form onSubmit={formik.handleSubmit} className={s.form}>
                <div className="input_cont">
                  <label className="label" htmlFor="">
                    Имя
                  </label>
                  <input
                    name="firstName"
                    onChange={formik.handleChange}
                    className="input"
                    type="text"
                    placeholder="Введите имя"
                  />
                </div>
                <div className="input_cont">
                  <label className="label" htmlFor="">
                    Фамилия
                  </label>
                  <input
                    name="lastName"
                    onChange={formik.handleChange}
                    className="input"
                    type="text"
                    placeholder="Введите фамилию"
                  />
                </div>
                <div className="input_cont">
                  <label className="label" htmlFor="">
                    Отчество
                  </label>
                  <input
                    name="middleName"
                    onChange={formik.handleChange}
                    className="input"
                    type="text"
                    placeholder="Введите отчество"
                  />
                </div>
                <div className="input_cont">
                  <label className="label" htmlFor="">
                    Логин
                  </label>
                  <input
                    name="username"
                    onChange={formik.handleChange}
                    className="input"
                    type="text"
                    placeholder="Введите логин"
                  />
                </div>
                <div className="input_cont">
                  <label className="label" htmlFor="">
                    Пароль
                  </label>
                  <input
                    name="password"
                    onChange={formik.handleChange}
                    className="input"
                    type="text"
                    placeholder="Введите пароль"
                  />
                </div>
                <button type="submit" className="button">
                  Зарегистрироваться
                </button>
              </form>
              <img
                className={s.sample_img}
                src="https://static.vecteezy.com/system/resources/previews/004/492/992/non_2x/a-woman-receives-an-online-doctor-consultation-at-home-doctor-recommends-medications-via-video-link-live-chat-patient-meets-with-an-online-doctor-via-the-laptop-application-illustration-vector.jpg"
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default RegistModal;
