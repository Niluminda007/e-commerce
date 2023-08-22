import * as yup from "yup";

export const userRegisterValidationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(5, "Name must be at least 5 characters"),
  userName: yup
    .string()
    .required("UserName is required")
    .min(5, "Username must be at least 5 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  address: yup.string().notRequired(),
});
