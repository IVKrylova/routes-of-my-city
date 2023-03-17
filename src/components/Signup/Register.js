import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Register.scss";

const Register = ({ onRegister }) => {
  const { register, handleSubmit } = useForm();
  const ref = React.useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Routes>
      <Route
        path="/sign-up"
        element={
          <form onSubmit={handleSubmit} className="form">
            <h1 className="form__title">Регистрация.</h1>
            <div className="form__fieldset">
              <input
                id="team"
                name="team"
                type="text"
                value={state.team}
                onChange={handleChange}
                className="form__input_type_simple"
                placeholder="Название команды"
              />
            </div>
            (forms.map(()=> return (
            <Form />> )))
            {/*             <fieldset className="form__fieldset">
              <h1 className="form__subtitle">Капитан</h1>
              <div className="form__input-full">
                <label htmlFor="captain-name" className="form__label">
                  Имя
                </label>
                <input
                  type="text"
                  className="form__input "
                  id="captain-name"
                  name="captain-name"
                  value={state.captainName}
                  placeholder="Ваше ФИО"
                  onChange={handleChange}
                />
              </div>
              <div className="form__input-full">
                <label htmlFor="captain-phone" className="form__label">
                  Телефон{" "}
                </label>
                <input
                  type="text"
                  className="form__input"
                  id="captain-phone"
                  name="captain-phone"
                  value={state.captainPhone}
                  placeholder="Телефон"
                  onChange={handleChange}
                />
              </div>
              <div className="form__input-full">
                <label htmlFor="captain-email" className="form__label">
                  Почта
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={state.email}
                  onChange={handleChange}
                  className="form__input"
                  placeholder="Электронная почта"
                />
              </div>
              <div className="form__input-full">
                <label htmlFor="captain-date" className="form__label">
                  Дата рождения{" "}
                </label>
                <input
                  id="date-captain"
                  name="date-captain"
                  type="text"
                  value={state.captainDate}
                  onChange={handleChange}
                  className="form__input"
                  placeholder="15.07.1997"
                  ref={ref}
                  onFocus={() => (ref.current.type = "date")}
                  onBlur={() => (ref.current.type = "text")}
                />
              </div>
            </fieldset>
             */}
            <p>
              *Для регистрации необходимо заполнить данные минимум двух игроков
            </p>
            <div className="form__button-container">
              <button type="submit" className="form__submit">
                Зарегистрироваться
              </button>
              <div className="form__sign-in-up">
                <p>Уже зарегистрированы? </p>
                <Link to="sign-in" className="link form__link">
                  Войти
                </Link>
              </div>
            </div>
          </form>
        }
      />
    </Routes>
  );
};

export default Register;
