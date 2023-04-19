import React from "react";
import { useFormContext } from "react-hook-form";
import line from "../../images/line.svg";
import chrest from "../../images/chrest.svg";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage } from "@hookform/error-message";
registerLocale("ru", ru);

export const Form = ({
  formName,
  modifier,
  count,
  id,
  handleMinusClick,
  Controller,
}) => {
  const name = `${modifier}name`;
  const email = `${modifier}email`;
  const date = `${modifier}date`;
  const phone = `${modifier}phone`;
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
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
          <label htmlFor={name} className="form__label">
            Имя
          </label>
          <input
            {...register(name)}
            type="text"
            className="form__input "
            placeholder="Ваше ФИО"
            autoComplete="name"
            errors={errors}
          />
          {/*   <p>{errors.name?.message}</p> */}
          <ErrorMessage
            errors={errors}
            name={name}
            className="form__error-message"
            render={({ message }) => <span className="tooltip">{message}</span>}
          />
        </div>
        <div className="form__input-full">
          <label htmlFor={`${modifier}-phone`} className="form__label">
            Телефон
          </label>
          <input
            {...register(phone)}
            type="text"
            className="form__input"
            placeholder="Телефон"
            autoComplete="tel"
          />
          <ErrorMessage
            errors={errors}
            name={phone}
            className="form__error-message"
            render={({ message }) => <span className="tooltip">{message}</span>}
          />
        </div>
        <div className="form__input-full">
          <label htmlFor="email" className="form__label">
            Почта
          </label>
          <input
            {...register(email)}
            type="email"
            className="form__input"
            placeholder="Электронная почта"
            autoComplete="email"
          />
          <p>{errors.email?.message}</p>
          <ErrorMessage
            errors={errors}
            name={email}
            render={({ message }) => <span className="tooltip">{message}</span>}
          />
        </div>
        <div className="form__input-full">
          <label htmlFor="date" className="form__label">
            Дата рождения
          </label>
          {/*    <input
            {...register(`${modifier}-date`, { required: true })}
            type="text"
            className="form__input"
            placeholder="15.07.1997"
            autoComplete="bday"
          /> */}
          <Controller
            defaultValue={new Date(1997, 6, 15)}
            name={date}
            control={control}
            rules={{ required: true }}
            render={({
              field: { onChange, value, ...params },
              fieldState: { error, invalid },
            }) => (
              <DatePicker
                {...params}
                type="text"
                disableFuture
                className="form__input"
                dateFormat="dd.MM.yyyy"
                placeholderText="15.07.1997"
                autoComplete="bday"
                locale="ru"
                selected={value}
                onChange={onChange}
                error={invalid}
                helperText={invalid ? error.message : null}
              />
            )}
          />
          <p>{errors.date?.message}</p>
          <ErrorMessage
            errors={errors}
            name={date}
            className="form__error-message"
            render={({ message }) => <span className="tooltip">{message}</span>}
          />
          {/*           <ErrorMessage
  errors={errors}
  name="birthDate"
  render={({ message }) =>   <span className="tooltip">{message}</span>}
/> */}
        </div>
      </fieldset>
      {id % 2 === 0 && count !== id + 1 && (
        <img src={line} className="form__line" alt="линия" />
      )}
    </>
  );
};

export default Form;
