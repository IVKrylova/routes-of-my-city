import GeneralPopup from '../GeneralPopup/GeneralPopup';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './PopupChangePassword.scss';

const PopupChangePassword = (props) => {
  const { values, handleChange } = useFormAndValidation();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    props.sendDataForm(values.email)
  }

  return (
    <GeneralPopup
      isOpenPopup={props.isOpenPopup}
      onClosePopup={props.onClosePopup}
      isPopupSuccess={props.isPopupSuccess}
      goToHomePage={props.goToHomePage}
      handleButtonClick={props.handleButtonClick}
      isOpenPopupChangePassword={props.isOpenPopupChangePassword}
    >
      <form className='form-change-password form' onSubmit={handleFormSubmit}>
        <p className='form-change-password__message'>
          Введите адрес эллектронной почты на которую мы вышлем письмо с инструкцией о смене пароля
        </p>
        <label htmlFor='change-password-email' className='form-change-password__input-block'>
          <input
            className={`form-reset-password__input-block-input ${values.email ? 'form-reset-password__input-block-input_fill' : ''}`}
            type='email'
            name='email'
            id='change-password-email'
            required
            placeholder='Почта'
            value={values.email || ''}
            onChange={handleChange}
          />
          <span className={`form-change-password__input-block-placeholder ${values.email ? 'form-change-password__input-block-placeholder_visible' : ''}`}>
            Почта
          </span>
          <span className='form-change-password__input-block-error'></span>
        </label>
        <ul className='form-change-password__button-list'>
          <li>
            <button onClick={props.onClosePopup} type='button' className='form-change-password__button-cancel'>
              Отмена
            </button>
          </li>
          <li>
            <button type='submit' className='form-change-password__button-cta'>
              Подтвердить
            </button>
          </li>
        </ul>
      </form>
    </GeneralPopup>
  );
}

export default PopupChangePassword;
