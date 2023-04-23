import * as Yup from "yup";
export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Введите электронную почту")
    .required("Необходимо заполнить")
    .min(2, "Длина поля не должна быть меньше 2х символов")
    .max(100, "Длина поля не должна первышать 100 символов"),
  password: Yup.string()
    .required("Необходимо заполнить")
    .min(8, "Длина пароля не должна быть меньше 8ми символов")
    .max(12, "Длина пароля не должна быть первышать 12 символов"),
});

export const formSchema = Yup.object({
  team: Yup.string()
    .required("Необходимо заполнить")
    .matches(
      /^[ёЁа-яА-Я!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\w]+( [ёЁа-яА-Я!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\w]+)*$/,
      "Поле должно состоять только из русских букв"
    )
    .min(2, "Длина поля не должна быть меньше 2х символов")
    .max(100, "Длина поля не должна первышать 100 символов"),
  captainname: Yup.string()
    .required("Необходимо заполнить")
    .matches(
      /^[ёЁа-яА-ЯA-Za-z-]+( [ёЁа-яА-ЯA-Za-z-]+){1,4}$/,
      "ФИО должно содержать обязательно фамилию и имя и состоять только из русских букв"
    )
    .min(2, "Длина поля не должна быть меньше 2х символов")
    .max(100, "Длина поля не должна первышать 100 символов"),
  player2name: Yup.string()
    .matches(
      /^[ёЁа-яА-ЯA-Za-z-]+( [ёЁа-яА-ЯA-Za-z-]+){1,4}$/,
      "ФИО должно содержать обязательно фамилию и имя и состоять только из русских букв"
    )
    .required("Необходимо заполнить")
    .min(2, "Длина поля не должна быть меньше 2х символов")
    .max(100, "Длина поля не должна первышать 100 символов"),
  player3name: Yup.string()
    .matches(
      /^[ёЁа-яА-ЯA-Za-z-]+( [ёЁа-яА-ЯA-Za-z-]+){1,4}$/,
      "ФИО должно содержать обязательно фамилию и имя и состоять только из русских букв"
    )
    .min(2, "Длина поля не должна быть меньше 2х символов")
    .max(100, "Длина поля не должна первышать 100 символов"),
  player4name: Yup.string()
    .matches(
      /^[ёЁа-яА-ЯA-Za-z-]+( [ёЁа-яА-ЯA-Za-z-]+){1,4}$/,
      "ФИО должно содержать обязательно фамилию и имя и состоять только из русских букв"
    )
    .min(2, "Длина поля не должна быть меньше 2х символов")
    .max(100, "Длина поля не должна первышать 100 символов"),
  player5name: Yup.string()
    .matches(
      /^[ёЁа-яА-ЯA-Za-z-]+( [ёЁа-яА-ЯA-Za-z-]+){1,4}$/,
      "ФИО должно содержать обязательно фамилию и имя и состоять только из русских букв"
    )
    .min(2, "Длина поля не должна быть меньше 2х символов")
    .max(100, "Длина поля не должна первышать 100 символов"),
  email: Yup.string()
    .email("Введите электронную почту")
    .required("Необходимо заполнить")
    .min(2, "Длина поля не должна быть меньше 2х символов")
    .max(100, "Длина поля не должна первышать 100 символов"),
  captainemail: Yup.string()
    .email("Введите электронную почту")
    .required("Необходимо заполнить")
    .oneOf(
      [Yup.ref("email")],
      "Электроная почта для регистрации и у капитана должны совпадать"
    )
    .min(2, "Длина поля не должна быть меньше 2х символов")
    .max(100, "Длина поля не должна первышать 100 символов"),
  player2email: Yup.string()
    .email("Введите электронную почту")
    .required("Необходимо заполнить")
    .min(2, "Длина поля не должна быть меньше 2х символов")
    .max(100, "Длина поля не должна первышать 100 символов"),
  player3email: Yup.string()
    .email("Введите электронную почту")
    .min(2, "Длина поля не должна быть меньше 2х символов")
    .max(100, "Длина поля не должна первышать 100 символов"),
  player4email: Yup.string()
    .email("Введите электронную почту")
    .min(2, "Длина поля не должна быть меньше 2х символов")
    .max(100, "Длина поля не должна первышать 100 символов"),
  player5email: Yup.string()
    .email("Введите электронную почту")
    .min(2, "Длина поля не должна быть меньше 2х символов")
    .max(100, "Длина поля не должна первышать 100 символов"),
  captainphone: Yup.string()
    .matches(/\+\d{9,10}/, "Введите номер телефона")
    .required("Необходимо заполнить")
    .min(2, "Длина поля не должна быть меньше 2х символов")
    .max(100, "Длина поля не должна первышать 100 символов"),
  player2phone: Yup.string()
    .matches(/\+\d{9,11}/, "Введите номер телефона")
    .required("Необходимо заполнить"),
  player3phone: Yup.string().matches(/\+\d{9,11}/, "Введите номер телефона"),
  player4phone: Yup.string().matches(/\+\d{9,11}/, "Введите номер телефона"),
  player5phone: Yup.string().matches(/\+\d{9,11}/, "Введите номер телефона"),
  captaindate: Yup.date().required("Необходимо заполнить"),
  player2date: Yup.date().required("Необходимо заполнить"),
  player3date: Yup.date(),
  player4date: Yup.date(),
  player5date: Yup.date(),
  password: Yup.string()
    .required("Необходимо заполнить")
    .min(8, "Длина пароля не должна быть меньше 8ми символов")
    .max(12, "Длина пароля не должна быть первышать 12 символов"),
  cpassword: Yup.string()
    .required("Подтвердите пароль")
    .min(4, "Длина пароля не должна быть меньше 4х символов")
    .max(12, "Длина пароля не должна быть первышать 12 символов")
    .oneOf([Yup.ref("password")], "Пароли не совпадают"),
  checkbox: Yup.bool()
    .oneOf([true], "Необходимо отметить галочку")
    .default(false),
});
