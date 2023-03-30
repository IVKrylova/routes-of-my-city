import React, { useEffect, useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form } from "../Form/Form";
import { forms } from "../../utils/constants";
import "./Register.scss";
/* import { useRef } from "react"; */
import back from "../../images/back.svg";
import plus from "../../images/plus.svg";
import lineHorizontal from "../../images/line-horizontal.svg";

const Register = () => {
  const {
    handleSubmit,
    register,
    handleChange,
    /*     formState: { isDirty, dirtyFields }, */
    /*     formState: { errors }, */
  } = useForm();
  /*   console.log(errors); */
  /*   const ref = React.useRef(); */

  /*   const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }; */
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
  return (
    <Routes>
      <Route
        path="/signup"
        element={
          <form
            /*      onSubmit={handleSubmit((data) => console.log(data))} */
            className="form container"
          >
            <Link to="/sign-in" className="link form__link">
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
                {...register("team", { required: true })}
                type="text"
                /*    onChange={handleChange} */
                className="form__input_type_simple"
                placeholder="Название команды"
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
                      register={register}
                      count={countPlayers}
                      setCountPlayers={setNumberOfPlayers}
                      handleMinusClick={handleMinusClick}
                    />
                  );
                })
                .slice(0, countPlayers)}
            </div>
            <p className="form__star">
              *Для регистрации необходимо заполнить данные минимум двух игроков
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
                <label htmlFor="email" className="form__label"></label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="form__input_type_simple form__input_type_signin"
                  placeholder="Электронная почта"
                />
                <label htmlFor="password" className="form__label"></label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  className="form__input_type_simple form__input_type_signin"
                  placeholder="Пароль"
                />
                <label
                  htmlFor="password-repeat"
                  className="form__label"
                ></label>
                <input
                  {...register("password-repeat", { required: true })}
                  type="password"
                  className="form__input_type_simple form__input_type_signin"
                  placeholder="Повторить пароль"
                />
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
        }
      />
    </Routes>
  );
};

export default Register;
