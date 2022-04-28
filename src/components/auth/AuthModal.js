import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import { auth } from "../../redux/actions/auth_registration";
import AuthHeader from "./AuthHeader";
import s from "../registration/Register.module.css";
import auth_s from "./Auth.module.css";

function AuthModal({ setShow, show }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log("data: ", data);
      auth(data, setShow);
    },
  });

  return (
    <>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <AuthHeader />
        <div className={auth_s.auth_cont}>
          <h3 className={s.regist_title}>Войти</h3>
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
                <button
                  disabled={!(formik.values.username && formik.values.password)}
                  type="submit"
                  className="button"
                >
                  Войти
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default AuthModal;
