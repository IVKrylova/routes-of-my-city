import iconSuccess from '../../images/icon-success-popup.svg';
import './GeneralPopup.scss';

const GeneralPopup = (props) => {
  const classPopup = `general-popup ${props.isOpenPopup && 'general-popup_opened'}`;
  return (
    <section className={classPopup}>
      <div className='general-popup__container'>
        <button
          onClick={props.onClosePopup}
          type='button'
          className='general-popup__button-close'
          aria-label='Кнопка закрыть'
        ></button>
        {!props.isPopupSuccess &&
          <>
            {props.children}
            <ul className='general-popup__button-list'>
              <li>
                <button
                  onClick={props.onClosePopup}
                  type='button'
                  className='general-popup__button-cancel'
                >
                  Отмена
                </button>
              </li>
              <li>
                <button
                  onClick={props.handleButtonClick}
                  type='button'
                  className='general-popup__button-cta'
                >
                  {props.textButtonCta}
                </button>
              </li>
            </ul>
          </>
        }
        {props.isPopupSuccess &&
          <>
            <img
              className='general-popup__succes-image'
              alt='Иконка действие успешно выполнено'
              src={iconSuccess}
            />
            <p className='general-popup__succes-message'>
              {props.message}
            </p>
            <button
              type='button'
              onClick={props.goToHomePage}
              className='general-popup__button-to-home-page'
            >
              На главную
            </button>
          </>
        }
      </div>
    </section>
  );
}

export default GeneralPopup;
