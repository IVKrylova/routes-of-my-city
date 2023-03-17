import React from "react";
const Form = ({ formName, modifier }) => {
  return (
    <fieldset className="form__fieldset">
      <h1 className="form__subtitle">{formName}</h1>
      <div className="form__input-full">
        <label htmlFor="`${modifier}`-name" className="form__label">
          Имя
        </label>
        <input
          type="text"
          className="form__input "
          id="`${modifier}`-name"
          name="`${modifier}`-name"
          /*      value={{ state.`${modifier}`Name }} */
          placeholder="Ваше ФИО"
          onChange={handleChange}
        />
      </div>
      <div className="form__input-full">
        <label htmlFor="`${modifier}`-phone" className="form__label">
          Телефон{" "}
        </label>
        <input
          type="text"
          className="form__input"
          id="`${modifier}`-phone"
          name="`${modifier}`-phone"
          /*         value={state.`${modifier}`Phone} */
          placeholder="Телефон"
          onChange={handleChange}
        />
      </div>
      <div className="form__input-full">
        <label htmlFor="`${modifier}`-email" className="form__label">
          Почта
        </label>
        <input
          id="email"
          name="email"
          type="email"
          /*      value={state.email} */
          onChange={handleChange}
          className="form__input"
          placeholder="Электронная почта"
        />
      </div>
      <div className="form__input-full">
        <label htmlFor={`${modifier}` - date} className="form__label">
          Дата рождения{" "}
        </label>
        <input
          id={`date-${modifier}`}
          name={`date-${modifier}`}
          type="text"
          /*     value={state.`${modifier}`Date} */
          onChange={handleChange}
          className="form__input"
          placeholder="15.07.1997"
          ref={ref}
          onFocus={() => (ref.current.type = "date")}
          onBlur={() => (ref.current.type = "text")}
        />
      </div>
    </fieldset>
  );
};

export default Form;
