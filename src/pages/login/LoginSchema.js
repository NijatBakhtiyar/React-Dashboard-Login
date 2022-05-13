import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  username: yup.string().required("Required"),
  password: yup
    .string()
    .min(8, "Must be min 8 characters")
    .max(20, "Must be max 20 characters")
    .required("Required"),
});
