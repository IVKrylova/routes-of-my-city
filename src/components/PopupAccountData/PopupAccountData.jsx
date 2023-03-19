import LinkToAccount from '../LinkToAccount/LinkToAccount';
import iconCategory from '../../images/icon-category.svg';
import './PopupAccountData.scss';

const PopupAccountData = (props) => {
  const classSection = `popup-account-data ${props.isHeaderAccountHovered ? 'popup-account-data_visible' : ''}`;
  return (
    <section
      className={classSection}
      aria-label='окно с данными аккаунта'
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
      >
        Выйти
      </button>
    </section>
  );
}

export default PopupAccountData;
