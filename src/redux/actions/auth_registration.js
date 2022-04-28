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
  const res = await request.register(data);
  swal("", "Вы успешно прошли регистрацию!", "success");
  setShowAuth(true);
  console.log("res_data: ", res.data);
};
