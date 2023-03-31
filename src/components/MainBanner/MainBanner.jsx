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
      {/* ToDo: add links to bloks.
      If <a> doesn`t work, you will need to install react-router-hash-link */}
      <a className='main-banner__button-cta' href='#'>Участвовать</a>
    </section>
  );
}

export default MainBanner;
