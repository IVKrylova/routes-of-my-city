import { useRef, useEffect } from 'react';
import LinkToAccount from '../LinkToAccount/LinkToAccount';
import iconCategory from '../../images/icon-category.svg';
import './PopupAccountData.scss';

const PopupAccountData = (props) => {
  const classSection = `popup-account-data ${props.isHeaderAccountHovered ? 'popup-account-data_visible' : ''}`;
  const popup = useRef();

  const handleClickOutside = (evt) => {
    if (popup.current && !popup.current.contains(evt.target)) {
      props.setIsHeaderAccountHovered(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <section
      className={classSection}
      aria-label='окно с данными аккаунта'
      ref={popup}
    >
      {/* ToDo: get data from API */}
      <div className='popup-account-data__team'>
        <LinkToAccount
          handleClickLinkToAccount={props.handleClickLinkToAccount}
        />
        <p className='popup-account-data__name'>Чемпионы</p>
        <p className='popup-account-data__members'>3</p>
      </div>
      <div className='popup-account-data__category'>
        <img
          className='popup-account-data__icon-category'
          src={iconCategory}
          alt='иконка категории квеста'
        />
        <p className='popup-account-data__name-category'>Велопрофи</p>
      </div>
      <button
        type='button'
        className='popup-account-data__button-exit'
        onClick={props.handleClickButtonExit}
      >
        Выйти
      </button>
    </section>
  );
}

export default PopupAccountData;
