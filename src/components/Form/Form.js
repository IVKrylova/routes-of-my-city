import React from "react";
import line from "../../images/line.svg";
import chrest from "../../images/chrest.svg";
/* import { useForm } from "react-hook-form"; */
export const Form = ({
  formName,
  modifier,
  register,
  count,
  id,
  handleMinusClick,
}) => {
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
  /*   const handleClick = (e) => {
    e.preventDefault();
    setCountPlayers(count - 1);
  }; */
  return (
    <>
      <fieldset id={`${modifier}-registration`} className="form__fieldset">
        <h1 className="form__subtitle">{formName}</h1>
        {id > 1 && (
          <button
            className="form__button form__button_type_close"
            onClick={handleMinusClick}
          >
            <img src={chrest} alt="chrest" />
          </button>
        )}
        <div className="form__input-full">
          <label htmlFor={`${modifier}-name`} className="form__label">
            Имя
          </label>
          <input
            {...register(`${modifier}-name`, { required: true })}
            type="text"
            className="form__input "
            placeholder="Ваше ФИО"
            autoComplete="name"
          />
        </div>
        <div className="form__input-full">
          <label htmlFor={`${modifier}-phone`} className="form__label">
            Телефон
          </label>
          <input
            {...register(`${modifier}-phone`, { required: true })}
            type="text"
            className="form__input"
            placeholder="Телефон"
            autoComplete="tel"
          />
        </div>
        <div className="form__input-full">
          <label htmlFor={`${modifier}-email`} className="form__label">
            Почта
          </label>
          <input
            {...register(`${modifier}-email`, { required: true })}
            type="email"
            className="form__input"
            placeholder="Электронная почта"
            autoComplete="email"
          />
        </div>
        <div className="form__input-full">
          <label htmlFor={`${modifier}-date`} className="form__label">
            Дата рождения
          </label>
          <input
            {...register(`${modifier}-date`, { required: true })}
            type="text"
            className="form__input"
            placeholder="15.07.1997"
            autoComplete="bday"
          />
        </div>
      </fieldset>
      {id % 2 === 0 && count !== id + 1 && (
        <img src={line} className="form__line" alt="линия" />
      )}
    </>
  );
};

export default Form;
