import s from "./Register.module.css";
import { Button, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import { registration } from "../../redux/actions/auth_registration";
import RegistrationHeader from "../headers/RegistrationHeader";
import AuthModal from "../auth/AuthModal";
import { useState } from "react";
import { MdAddAPhoto } from "react-icons/md";
import {request} from "../../redux/api";
import {useNavigate} from "react-router-dom";

function RegistModal({ setShow, show, setShowAuth }) {

  const navigate = useNavigate();

  const [img, setImg] = useState();
  const [imgURL, setImgURL] = useState();
  const selectedImg = (e) => {
    setImg(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setImgURL(URL.createObjectURL(e.target.files[0]));
    }
    console.log(e.target.files[0].name);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      username: "",
      password: "",
      dateOfBirth: "",
      address: "",
      city: "",
      email: "",
      gender: "",
      avatar: img,
    },
    onSubmit: (data) => {
      console.log("data: ", data);
      const formData = new FormData()
      formData.append("firstName", data.firstName)
      formData.append("lastName", data.lastName)
      formData.append("middleName", data.middleName)
      formData.append("dateOfBirth", data.dateOfBirth)
      formData.append("address", data.address)
      formData.append("city", data.city)
      formData.append("email", data.email)
      formData.append("username", data.username)
      formData.append("password", data.password)
      formData.append("gender", data.gender)
      formData.append("avatar", img, img.name)

      registration(formData, setShowAuth, navigate)
    },
  });
  localStorage.getItem("token") && setShow(false);

  return (
    <>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <RegistrationHeader />
        <Modal.Body>
          <h3 className={s.regist_title}>??????????????????????</h3>
          <div className={s.registration}>
            <div className={s.registration_cont}>
              <form onSubmit={formik.handleSubmit} className={s.form}>
                <label htmlFor="image" className={s.image_label}>
                  <div className={s.icon_cont}>
                    <MdAddAPhoto className={s.img_icon} />
                  </div>
                  <img className={s.image} src={imgURL} alt="" />
                </label>
                <input
                    onChange={(e) => selectedImg(e)}
                    type="file"
                    name="image"
                    id="image"
                    value={formik.values.????????}
                    className={s.img_file}
                />
                <div className="input_cont">
                  <label className="label" htmlFor="">
                    ??????
                  </label>
                  <input
                    name="firstName"
                    onChange={formik.handleChange}
                    className="input"
                    type="text"
                    placeholder="?????????????? ??????"
                  />
                </div>
                <div className="input_cont">
                  <label className="label" htmlFor="">
                    ??????????????
                  </label>
                  <input
                    name="lastName"
                    onChange={formik.handleChange}
                    className="input"
                    type="text"
                    placeholder="?????????????? ??????????????"
                  />
                </div>
                <div className="input_cont">
                  <label className="label" htmlFor="">
                    ????????????????
                  </label>
                  <input
                    name="middleName"
                    onChange={formik.handleChange}
                    className="input"
                    type="text"
                    placeholder="?????????????? ????????????????"
                  />
                </div>
                <div className="input_cont">
                  <label className="label" htmlFor="">
                    ???????? ????????????????
                  </label>
                  <input
                    name="dateOfBirth"
                    onChange={formik.handleChange}
                    className="input"
                    type="date"
                  />
                </div>
                <div className="input_cont">
                  <label className="label" htmlFor="">
                    ??????
                  </label>
                <select
                    onChange={(e) => formik.handleChange(e)}
                    className="input"
                    /* value={formik.values.??????????????????} */
                    name="gender"
                >
                  <option className={s.option} value="MAN">
                    ??????????????
                  </option>
                  <option className={s.option} value="WOMAN">
                    ??????????????
                  </option>
                </select>
                </div>
                <div className="input_cont">
                  <label className="label" htmlFor="">
                    ??????????
                  </label>
                  <input
                    name="address"
                    onChange={formik.handleChange}
                    className="input"
                    type="text"
                    placeholder="?????????????? ??????????"
                  />
                </div>
                <div className="input_cont">
                  <label className="label" htmlFor="">
                    ??????????
                  </label>
                  <input
                    name="city"
                    onChange={formik.handleChange}
                    className="input"
                    type="text"
                    placeholder="?????????????? ??????????"
                  />
                </div>
                <div className="input_cont">
                  <label className="label" htmlFor="">
                    ??????????
                  </label>
                  <input
                    name="email"
                    onChange={formik.handleChange}
                    className="input"
                    type="text"
                    placeholder="?????????????? ??????????"
                  />
                </div>
                <div className="input_cont">
                  <label className="label" htmlFor="">
                    ??????????
                  </label>
                  <input
                    name="username"
                    onChange={formik.handleChange}
                    className="input"
                    type="text"
                    placeholder="?????????????? ??????????"
                  />
                </div>
                <div className="input_cont">
                  <label className="label" htmlFor="">
                    ????????????
                  </label>
                  <input
                    name="password"
                    onChange={formik.handleChange}
                    className="input"
                    type="text"
                    placeholder="?????????????? ????????????"
                  />
                </div>
                <button type="submit" className="button">
                  ????????????????????????????????????
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
