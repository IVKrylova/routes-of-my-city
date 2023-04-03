import { Link } from 'react-router-dom';
import './MainBanner.scss';

const MainBanner = () => {
  return (
    <section className='main-banner'>
      <h1 className='main-banner__title'>
        Городской <span className='main-banner__orange-shadow'>квест</span> в Ставрополе
      </h1>
      <p className='main-banner__text'>
        Все примечательные уголки города и много положительных эмоций ждут вас
      </p>
      <Link className='main-banner__button-cta' to='/#main-quests'>
        Участвовать
      </Link>
    </section>
  );
}

export default MainBanner;
