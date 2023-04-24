import GeneralPopup from '../GeneralPopup/GeneralPopup';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './PopupResetPassword.scss';

const PopupResetPassword = (props) => {
  const { values, handleChange } = useFormAndValidation();

  return (
    <GeneralPopup
      message='Ваш пароль успешно изменён'
      isOpenPopup={props.isOpenPopup}
      onClosePopup={props.onClosePopup}
      isPopupSuccess={props.isPopupSuccess}
      goToHomePage={props.goToHomePage}
      handleButtonClick={props.handleButtonClick}
      isOpenPopupResetPassword={props.isOpenPopupResetPassword}
    >
      <form className='form-reset-password form'>
        <h2 className='form-reset-password__title'>
          Сбросить пароль
        </h2>
        <label htmlFor='password' className='form-reset-password__input-block'>
          <input
            className={`form-reset-password__input-block-input ${values.password ? 'form-reset-password__input-block-input_fill' : ''}`}
            type='password'
            name='password'
            id='password'
            required
            placeholder='Пароль'
            value={values.password || ''}
            onChange={handleChange}
          />
          <span className={`form-reset-password__input-block-placeholder ${values.password ? 'form-reset-password__input-block-placeholder_visible' : ''}`}>
            Пароль
          </span>
          <span className='form-reset-password__input-block-error'></span>
        </label>
        <label htmlFor='repeatPassword' className='form-reset-password__input-block'>
          <input
            className={`form-reset-password__input-block-input ${values.repeatPassword ? 'form-reset-password__input-block-input_fill' : ''}`}
            type='password'
            name='repeatPassword'
            id='repeatPassword'
            required
            placeholder='Повторите пароль'
            value={values.repeatPassword || ''}
            onChange={handleChange}
          />
          <span className={`form-reset-password__input-block-placeholder ${values.repeatPassword ? 'form-reset-password__input-block-placeholder_visible' : ''}`}>
            Повторите пароль
          </span>
          <span className='form-reset-password__input-block-error'></span>
        </label>
        <ul className='form-reset-password__button-list'>
          <li>
            <button onClick={props.onClosePopup} type='button' className='form-reset-password__button-cancel'>
              Отмена
            </button>
          </li>
          <li>
            <button type='submit' className='form-reset-password__button-cta'>
              Сбросить пароль
            </button>
          </li>
        </ul>
      </form>
    </GeneralPopup>
  );
}

export default PopupResetPassword;
