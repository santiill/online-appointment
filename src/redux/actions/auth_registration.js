import swal from "sweetalert";
import { request } from "../api";

export const auth = async (data, setShow) => {
  const res = await request.login(data);
  setShow(false);
  console.log("token: ", res.data.consumer);
  localStorage.setItem("token", res.data.access_token);
  localStorage.setItem("user", JSON.stringify(res.data.consumer));
};

export const registration = async (data, setShowAuth) => {
  console.log("d: ", data)
  const res = await request.register(data)
  swal(
    "Вы успешно прошли регистрацию!",
    "Полис отправлен на вашу эл.почту.",
    "success"
  );
  setShowAuth(true);
  console.log("res_data: ", res.data);
};
