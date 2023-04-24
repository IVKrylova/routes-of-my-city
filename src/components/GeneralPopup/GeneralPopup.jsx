import iconSuccess from '../../images/icon-success-popup.svg';
import './GeneralPopup.scss';

const GeneralPopup = (props) => {
  const classPopup = `general-popup ${props.isOpenPopup ? 'general-popup_opened' : ''}`;
  const classPopupContainer = `general-popup__container
    ${props.isOpenPopupChangeQuestCategory ? 'general-popup__container_change-category' : ''}
    ${props.isOpenPopopAddPlayer ? 'general-popup__container_player' : ''}
    ${props.isOpenPopopEditPlayer ? 'general-popup__container_player' : ''}
    ${props.isOpenPopupResetPassword ? 'general-popup__container_password' : ''}`;

  return (
    <section className={classPopup}>
      <div className={classPopupContainer}>
        <button
          onClick={props.onClosePopup}
          type='button'
          className='general-popup__button-close'
          aria-label='Кнопка закрыть'
        ></button>
        {!props.isPopupSuccess &&
          <>
            {props.children}
            {props.isOpenPopupChangeQuestCategory === undefined &&
            props.isOpenPopopAddPlayer === undefined &&
            props.isOpenPopopEditPlayer === undefined &&
            props.isOpenPopupResetPassword === undefined &&
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
            }
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
