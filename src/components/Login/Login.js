import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./Login.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../Validation/Validation";
import * as auth from "../../utils/auth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  /*   const handleSubmit = (event) => {
    event.preventDefault();
    if (onLogin && values.email && values.password) {
      return onLogin(values.email, values.password);
    }
  }; */
  const onSubmit = async (data) => {
    await auth.login(data).then((response) => {
      console.log("response", response);
      if (response.token) {
        /* handleLogin(email, password); */
        alert("ok");
        /*        setSuccess(true);
        setInfoTooltip(true); */
        methods.reset();
      } else { };
  };
  return (
    <Routes>
      <Route
        path="/signin"
        element={
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="form container"
          >
            <fieldset className="form__fieldset">
              <h1 className="form__title">Вход в аккаунт</h1>
              <input
                {...register("email")}
                type="email"
                className="form__input_type_simple form__input_type_signin"
                placeholder="Электронная почта"
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <span className="tooltip">{message}</span>
                )}
              />
              <input
                {...register("password")}
                type="password"
                className="form__input_type_simple form__input_type_signin"
                placeholder="Пароль"
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <span className="tooltip">{message}</span>
                )}
              />
            </fieldset>
            <div className="form__button-container">
              <input
                type="submit"
                className="button__button-sign form__submit"
                value="Войти"
              />
            </div>
          </form>
        }
      />
    </Routes>
  );
};

export default Login;
