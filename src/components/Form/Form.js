import React from "react";
import line from "../../images/line.svg";
/* import { useForm } from "react-hook-form"; */
export const Form = ({ formName, modifier, register }) => {
  /*   const { register } = useForm(); */
  /*   const MyInput = React.forwardRef(({ name, label, ...rest }, ref) => {
    return (
      <>
        {   <label htmlFor={name}>{label}</label> }
        <input name={name} {...rest} ref={ref} />
      </>
    );
  });
  const ref = React.useRef(); */

  return (
    <>
      <fieldset id="registration" className="form__fieldset">
        <h1 className="form__subtitle">{formName}</h1>
        <div className="form__input-full">
          <label htmlFor={`${modifier}-name`} className="form__label">
            Имя
          </label>
          <input
            {...register(`${modifier}-name`, { required: true })}
            /*   label="Имя" */
            type="text"
            className="form__input "
            /*  id={`${modifier}-name`}
          name={`${modifier}-name`} */
            /*      value={{ state.`${modifier}`Name }} */
            placeholder="Ваше ФИО"
          />
        </div>
        <div className="form__input-full">
          <label htmlFor={`${modifier}-phone`} className="form__label">
            Телефон
          </label>
          <input
            /*      label="Телефон" */
            {...register(`${modifier}-phone`, { required: true })}
            type="text"
            className="form__input"
            /*         value={state.`${modifier}`Phone} */
            placeholder="Телефон"
          />
        </div>
        <div className="form__input-full">
          <label htmlFor={`${modifier}-email`} className="form__label">
            Почта
          </label>
          <input
            /*          label="Почта" */
            {...register(`${modifier}-email`, { required: true })}
            type="email"
            /*      value={state.email} */
            /*           onChange={handleChange} */
            className="form__input"
            placeholder="Электронная почта"
          />
        </div>
        <div className="form__input-full">
          <label htmlFor={`${modifier}-date`} className="form__label">
            Дата рождения
          </label>
          <input
            /*     label="Дата рождения" */
            {...register(`${modifier}-date`, { required: true })}
            type="text"
            /*     value={state.`${modifier}`Date} */
            /*       onChange={handleChange} */
            className="form__input"
            placeholder="15.07.1997"
          />
        </div>
      </fieldset>
      <img src={line} className="form__line" alt="линия" />
    </>
  );
};

export default Form;
