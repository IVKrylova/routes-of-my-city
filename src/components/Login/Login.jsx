import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import ButtonGoBack from '../ButtonGoBack/ButtonGoBack';
import './Login.scss';

const Login = (props) => {
  const [classButtonGoBack, setClassButtonGoBack] = useState();
  const { values, handleChange } = useFormAndValidation();

  useEffect(() => {
    props.screenWidth < 1024
      ? setClassButtonGoBack('page-login__button-go-back_hidden')
      : setClassButtonGoBack('page-login__button-go-back_visible');
  }, [props.screenWidth]);

  return (
    <main className='page-login'>
      <ButtonGoBack
        nameClass={classButtonGoBack}
      />
      <h1 className='page-login__title'>
        Вход в аккаунт
      </h1>
      <form className='page-login__form form'>
        <label htmlFor='email' className='page-login__input-block'>
          <input
            className={`page-login__input-block-input ${values.email ? 'page-login__input-block-input_fill' : ''}`}
            type='email'
            name='email'
            id='email'
            required
            placeholder='Электронная почта'
            value={values.email || ''}
            onChange={handleChange}
          />
          <span className={`page-login__input-block-placeholder ${values.email ? 'page-login__input-block-placeholder_visible' : ''}`}>
            Электронная почта
          </span>
          <span className='page-login__input-block-error'></span>
        </label>
        <label htmlFor='password' className='page-login__input-block'>
          <input
            className={`page-login__input-block-input ${values.password ? 'page-login__input-block-input_fill' : ''}`}
            type='text'
            id='password'
            name='password'
            required
            placeholder='Пароль'
            value={values.password || ''}
            onChange={handleChange}
          />
          <span className={`page-login__input-block-placeholder ${values.password ? 'page-login__input-block-placeholder_visible' : ''}`}>
            Пароль
          </span>
          <span className='page-login__input-block-error'></span>
        </label>
        {/* ToDo: add popup */}
        <button type='button' className='page-login__reset-password'>
          Забыли пароль?
        </button>
        <div className='page-login__button-list'>
          <button className='page-login__button-submit' type='submit'>
            Войти
          </button>
          <Link className='page-login__link-to-register' to='/signup'>
            Зарегестрироваться
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Login;
