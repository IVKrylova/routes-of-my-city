import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './Login.scss';

const Login = (props) => {
  const { values, handleChange } = useFormAndValidation();

  return (
    <main className='page-login'>
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
        <button className='page-login__button-submit' type='submit'>
          Войти
        </button>
      </form>
      <Link className='page-login__link-to-register' to='/signup'>
        Зарегестрироваться
      </Link>
    </main>
  );
}

export default Login;
