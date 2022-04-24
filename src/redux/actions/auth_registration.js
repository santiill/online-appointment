import { request } from "../api";

export const auth = async (data) => {
  const res = await request.login(data);
  console.log("token: ", res.data.access_token);
  localStorage.setItem("token", res.data.access_token);
};

export const registration = async (data) => {
  const res = await request.register(data);
  console.log("res_data: ", res.data);
};
