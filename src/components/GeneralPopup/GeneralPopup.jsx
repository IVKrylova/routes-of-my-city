import './GeneralPopup.scss';

const GeneralPopup = (props) => {
  const classPopup = `general-popup ${props.isOpenGeneralPopup && 'general-popup_opened'}`;
  return (
    <section className={classPopup}>
      <div className='general-popup__container'>
        <button
          onClick={props.onClosePopup}
          type='button'
          className='general-popup__button-close'
          aria-label='Кнопка закрыть'
        ></button>
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
              onClick={props.handleClickCta}
              type='button'
              className='general-popup__button-cta'
            >
              Удалить{/* props.textButtonCta */}
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default GeneralPopup;
