import React, { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { Controller, useForm, FormProvider } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Form } from "../Form/Form";
import { forms } from "../../utils/constants";
import "./Register.scss";
import back from "../../images/back.svg";
import plus from "../../images/plus.svg";
import lineHorizontal from "../../images/line-horizontal.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../Validation/Validation";
import * as auth from "../../utils/auth";
import { ERROR_MESSAGES } from "../../utils/constants";

const Register = () => {
  const { reset } = useForm({
    resolver: yupResolver(formSchema),
  });
  const navigate = useNavigate();
  const [countPlayers, setNumberOfPlayers] = useState(2);
  const handlePlusClick = (e) => {
    e.preventDefault();
    setNumberOfPlayers(countPlayers + 1);
  };
  const handleMinusClick = (e) => {
    e.preventDefault();
    setNumberOfPlayers(countPlayers - 1);
  };
  const methods = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data) => {
    auth
      .register(data)
      .then((response) => {
        if (response.email) {
          /* handleLogin(email, password); */
          alert("ok");
          /*        setSuccess(true);
          setInfoTooltip(true); */
        }
      })
      .catch((res) => {
        if (res.statusText === "Bad Request") {
          alert(ERROR_MESSAGES.dataBadRequest);
        } else if (res.status === 409) {
          alert(ERROR_MESSAGES.userExists);
        } else if (res.status === 401) {
          alert(ERROR_MESSAGES.userBadRequest);
        } else {
          alert(`${ERROR_MESSAGES.serverError} ${res.status}`);
        }
      });
    console.log(data);
    methods.watch();
    reset();
  };
  return (
    <Routes>
      <Route
        path="/signup"
        element={
          <FormProvider {...methods}>
            <form
              noValidate
              onSubmit={methods.handleSubmit(onSubmit)}
              className="form container"
            >
              <Link to="/signin" className="link form__link">
                <button
                  className="form__button form__back-button"
                  onClick={() => navigate(-1)}
                >
                  <img src={back} alt="назад" />
                </button>
              </Link>
              <div className="form__sign-in ">
                <h1 className="form__title">Регистрация</h1>
                <div className="form__sign-in-up">
                  <p className="form__sign-text">Уже есть аккаунт? </p>
                  <Link to="/sign-in" className="link form__link">
                    Войти
                  </Link>
                </div>
              </div>
              <div className="form__fieldset">
                <input
                  {...methods.register("team", { required: true })}
                  type="text"
                  className="form__input_type_simple"
                  placeholder="Название команды"
                />
                <ErrorMessage
                  errors={methods.errors}
                  name="team"
                  render={({ message }) => (
                    <span className="tooltip">{message}</span>
                  )}
                />
              </div>
              <div className="form__fieldset-box">
                {forms
                  .map((fieldset) => {
                    return (
                      <Form
                        key={fieldset.id}
                        id={fieldset.id}
                        formName={fieldset.formName}
                        modifier={fieldset.modifier}
                        count={countPlayers}
                        setCountPlayers={setNumberOfPlayers}
                        handleMinusClick={handleMinusClick}
                        Controller={Controller}
                      />
                    );
                  })
                  .slice(0, countPlayers)}
              </div>
              <p className="form__star">
                *Для регистрации необходимо заполнить данные минимум двух
                игроков
              </p>
              <div className="form__sign-data-container">
                <div className="form__plus-box">
                  <button
                    onClick={handlePlusClick}
                    className="form__button "
                    style={{ marginRight: "20px" }}
                  >
                    <img src={plus} alt="плюс" />
                  </button>
                  <div>
                    <p className="">Добавить игрока</p>
                  </div>
                </div>
                <img
                  src={lineHorizontal}
                  className="form__line-horizontal"
                  alt="линия"
                />
                <fieldset className="form__fieldset">
                  <h1 className="form__title">Данные для входа</h1>
                  <input
                    {...methods.register("email")}
                    type="email"
                    className="form__input_type_simple form__input_type_signin"
                    placeholder="Электронная почта"
                  />
                  {/*       <ErrorMessage
                    errors={methods.errors}
                    name="email"
                    render={({ messages }) => {
                      console.log("messages", messages);
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p key={type}>{message}</p>
                          ))
                        : null;
                    }}
                  /> */}
                  <ErrorMessage
                    errors={methods.errors}
                    name="cpassword"
                    className="form__error-message"
                    render={({ message }) => (
                      <span className="tooltip">{message}</span>
                    )}
                  />
                  <input
                    {...methods.register("password")}
                    type="password"
                    className="form__input_type_simple form__input_type_signin"
                    placeholder="Пароль"
                  />
                  <ErrorMessage
                    errors={methods.errors}
                    name="password"
                    className="form__error-message"
                    render={({ message }) => (
                      <span className="tooltip">{message}</span>
                    )}
                  />
                  <input
                    {...methods.register("cpassword")}
                    type="password"
                    className="form__input_type_simple form__input_type_signin"
                    placeholder="Повторить пароль"
                  />
                  <ErrorMessage
                    errors={methods.errors}
                    name="cpassword"
                    className="form__error-message"
                    render={({ message }) => (
                      <span className="tooltip">{message}</span>
                    )}
                  />
                  <div className="form__checkbox-container">
                    <input
                      type="checkbox"
                      {...methods.register("checkbox")}
                      className="form__checkbox"
                    />
                    <ErrorMessage
                      errors={methods.errors}
                      name="checkbox"
                      className="form__error-message"
                      render={({ message }) => (
                        <span className="tooltip">{message}</span>
                      )}
                    />
                    <label htmlFor="checkbox" className="form__checkbox-label">
                      Нажимая, вы принимаете согласие о конфедиациальности
                    </label>
                  </div>
                </fieldset>
                <div className="form__button-container">
                  <input
                    type="submit"
                    className="button__button-sign form__submit"
                    value="Зарегистрироваться"
                  />
                </div>
              </div>
            </form>
          </FormProvider>
        }
      />
    </Routes>
  );
};

export default Register;
