import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './FormPlayer.scss';

const FormPlayer = ({ sendDataForm, title, button, defaultName, defaultPhone, defaultEmail, defaultBirthday, defaultCaptain }) => {
  const { values, handleChange } = useFormAndValidation();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    sendDataForm(values)
  }

  return (
    <form className='form form-add-player' onSubmit={handleFormSubmit}>
      <h2 className='form form-add-player__title'>
        {title}
      </h2>
      <label htmlFor='name' className='form-add-player__input-block'>
        <input
          className={`form-add-player__input-block-input ${values.name ? 'form-add-player__input-block-input_fill' : ''}`}
          type='text'
          name='name'
          id='name'
          required
          placeholder='Имя'
          value={values.name || defaultName}
          onChange={handleChange}
        />
        <span className={`form-add-player__input-block-placeholder ${values.name ? 'form-add-player__input-block-placeholder_visible' : ''}`}>
          Имя
        </span>
        <span className='form-add-player__input-block-error'></span>
      </label>
      <label htmlFor='name' className='form-add-player__input-block'>
        <input
          className={`form-add-player__input-block-input ${values.tel ? 'form-add-player__input-block-input_fill' : ''}`}
          type='tel'
          name='tel'
          id='tel'
          required
          placeholder='Телефон'
          value={values.tel || defaultPhone}
          onChange={handleChange}
        />
        <span className={`form-add-player__input-block-placeholder ${values.tel ? 'form-add-player__input-block-placeholder_visible' : ''}`}>
          Телефон
        </span>
        <span className='form-add-player__input-block-error'></span>
      </label>
      <label htmlFor='email' className='form-add-player__input-block'>
        <input
          className={`form-add-player__input-block-input ${values.email ? 'form-add-player__input-block-input_fill' : ''}`}
          type='email'
          name='email'
          id='email'
          required
          placeholder='Почта'
          value={values.email || defaultEmail}
          onChange={handleChange}
        />
        <span className={`form-add-player__input-block-placeholder ${values.email ? 'form-add-player__input-block-placeholder_visible' : ''}`}>
          Почта
        </span>
        <span className='form-add-player__input-block-error'></span>
      </label>
      <label htmlFor='birthday' className='form-add-player__input-block'>
        <input
          className={`form-add-player__input-block-input ${values.birthday ? 'form-add-player__input-block-input_fill' : ''}`}
          type='date'
          name='birthday'
          id='birthday'
          required
          placeholder='Дата рождения'
          value={values.birthday || defaultBirthday}
          onChange={handleChange}
        />
        <span className={`form-add-player__input-block-placeholder ${values.birthday ? 'form-add-player__input-block-placeholder_visible' : ''}`}>
          Дата рождения
        </span>
        <span className='form-add-player__input-block-error'></span>
      </label>
      <label htmlFor='captain' className={`form-add-player__input-checkbox`}>
        <input
          className={`form-add-player__input-checkbox-input ${values.captain ? 'form-add-player__input-block-input_fill' : ''}`}
          type='checkbox'
          name='captain'
          id='captain'
          placeholder='Дата рождения'
          value={values.captain || defaultCaptain}
          onChange={handleChange}
        />
        <span className={`form-add-player__input-checkbox-span`}>
          Назначить капитаном
        </span>
      </label>
      <button type='submit' className='form-add-player__button'>
        {button}
      </button>
    </form>
  );
}

export default FormPlayer;
