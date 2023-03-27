import { Link } from 'react-router-dom';
import iconPageNotFound from '../../images/icon-404.svg';
import './PageNotFound.scss';

const PageNotFound = () => {
  return (
      <main className='page-not-found'>
        <img
          src={iconPageNotFound}
          alt='иконка страница не найдена'
          className='page-not-found__img'
        />
        <p className='page-not-found__title'>
          Страница не найдена
        </p>
        <p className='page-not-found__message'>
          Мы обязательно разберёмся с этим недоразумением,
          а пока вернитесь на главную страницу
        </p>
        {/* ToDo: check link */}
        <Link to='/' className='page-not-found__link-to-main'>
          Вернуться на главную
        </Link>
      </main>
    );
  }

export default PageNotFound;
