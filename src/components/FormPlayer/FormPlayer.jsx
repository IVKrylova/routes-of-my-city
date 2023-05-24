import { useEffect } from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './FormPlayer.scss';

const FormPlayer = (props) => {
  const { values, handleChange, setValues, setErrors, setIsValid } = useFormAndValidation();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    props.sendDataForm(values)
  }

  useEffect(_ => {
    if (props.isOpenPopopEditPlayer) {
      setValues({
        name: props.player.name,
        tel: props.player.phone,
        email: props.player.email,
        birthday: props.player.birthday,
        captain: props.player.status === 'Капитан',
      });
      setErrors({});
      setIsValid(true);
    }
  }, [props.player, props.isOpenPopopEditPlayer]);

  return (
    <form className='form form-add-player' onSubmit={handleFormSubmit}>
      <h2 className='form form-add-player__title'>
        {props.title}
      </h2>
      <label htmlFor={props.idName} className='form-add-player__input-block'>
        <input
          className={`form-add-player__input-block-input ${values.name ? 'form-add-player__input-block-input_fill' : ''}`}
          type='text'
          name='name'
          id={props.idName}
          required
          placeholder='Имя'
          value={values.name || ''}
          onChange={handleChange}
        />
        <span className={`form-add-player__input-block-placeholder ${values.name ? 'form-add-player__input-block-placeholder_visible' : ''}`}>
          Имя
        </span>
        <span className='form-add-player__input-block-error'></span>
      </label>
      <label htmlFor={props.idTel} className='form-add-player__input-block'>
        <input
          className={`form-add-player__input-block-input ${values.tel ? 'form-add-player__input-block-input_fill' : ''}`}
          type='tel'
          name='tel'
          id={props.idTel}
          required
          placeholder='Телефон'
          value={values.tel || ''}
          onChange={handleChange}
        />
        <span className={`form-add-player__input-block-placeholder ${values.tel ? 'form-add-player__input-block-placeholder_visible' : ''}`}>
          Телефон
        </span>
        <span className='form-add-player__input-block-error'></span>
      </label>
      <label htmlFor={props.idEmail} className='form-add-player__input-block'>
        <input
          className={`form-add-player__input-block-input ${values.email ? 'form-add-player__input-block-input_fill' : ''}`}
          type='email'
          name='email'
          id={props.idEmail}
          required
          placeholder='Почта'
          value={values.email || ''}
          onChange={handleChange}
        />
        <span className={`form-add-player__input-block-placeholder ${values.email ? 'form-add-player__input-block-placeholder_visible' : ''}`}>
          Почта
        </span>
        <span className='form-add-player__input-block-error'></span>
      </label>
      <label htmlFor={props.idBirthday} className='form-add-player__input-block'>
        <input
          className={`form-add-player__input-block-input ${values.birthday ? 'form-add-player__input-block-input_fill' : ''}`}
          type='date'
          name='birthday'
          id={props.idBirthday}
          required
          placeholder='Дата рождения'
          value={values.birthday || ''}
          onChange={handleChange}
        />
        <span className={`form-add-player__input-block-placeholder ${values.birthday ? 'form-add-player__input-block-placeholder_visible' : ''}`}>
          Дата рождения
        </span>
        <span className='form-add-player__input-block-error'></span>
      </label>
      <label htmlFor={props.idCaptain} className={`form-add-player__input-checkbox`}>
        <input
          className={`form-add-player__input-checkbox-input ${values.captain ? 'form-add-player__input-block-input_fill' : ''}`}
          type='checkbox'
          name='captain'
          id={props.idCaptain}
          value={values.captain || false}
          checked={props.player && props.player.status === 'Капитан'}
          onChange={handleChange}
        />
        <span className={`form-add-player__input-checkbox-span`}>
          Назначить капитаном
        </span>
      </label>
      <button type='submit' className='form-add-player__button'>
        {props.button}
      </button>
    </form>
  );
}

export default FormPlayer;
