import { Link } from 'react-router-dom';
import pageNotFound from '../../images/page-not-found.png';
import './PageNotFound.scss';

const PageNotFound = () => {
  return (
    <main className='page-not-found'>
      <img
        src={pageNotFound}
        alt='иконка страница не найдена'
        className='page-not-found__img'
      />
      <div className='page-not-found__content'>
        <p className='page-not-found__title'>
          Страница не найдена
        </p>
        <p className='page-not-found__message'>
          Мы обязательно разберёмся с этим недоразумением,
          а пока вернитесь на главную страницу
        </p>
        <Link to='/' className='page-not-found__link-to-main'>
          Вернуться на главную
        </Link>
      </div>
    </main>
  );
}

export default PageNotFound;
