import * as yup from "yup";
export const PersonSchema = yup.object().shape({
  policy: yup.number().typeError("Должно быть числом").required("Обязательно"),
  number: yup.string().typeError("Должно быть числом").required("Обязательно"),
});
