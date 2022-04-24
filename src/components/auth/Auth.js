import { useFormik } from "formik";
import React from "react";
import { auth } from "../../redux/actions/auth_registration";
import "../baseStyles.css";
import s from "../registration/Register.module.css";

const Auth = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log("data: ", data);
      auth(data);
    },
  });

  return (
    <div className={s.registration}>
      <div className={s.registration_cont}>
        <form onSubmit={formik.handleSubmit} className={s.form}>
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
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
