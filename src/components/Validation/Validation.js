import * as Yup from "yup";

export const formSchema = Yup.object({
  team: Yup.string().required("Необходимо заполнить"),
}).shape({
  password: Yup.string()
    .required("Необходимо заполнить")
    .min(4, "Длина пароля не должна быть меньше 4х символов")
    .max(12, "Длина пароля не должна быть первышать 12 символов"),
  cpassword: Yup.string()
    .required("Confirm Password is required")
    .min(4, "Длина пароля не должна быть меньше 4х символов")
    .max(12, "Длина пароля не должна быть первышать 12 символов")
    .oneOf([Yup.ref("password")], "Пароли не совпадают"),
});
