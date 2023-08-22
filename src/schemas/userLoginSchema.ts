import * as yup from "yup";

export const userLoginValidationSchema = yup.object({
  userName: yup.string().required("userName is required"),
  password: yup.string().required("password is required"),
});
