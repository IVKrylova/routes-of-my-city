import GeneralPopup from '../GeneralPopup/GeneralPopup';
import PopupMessage from '../PopupMessage/PopupMessage';

const CancelQuestPopup = (props) => {
  return (
    <GeneralPopup
      message='Заявка на участие отменена'
      isOpenPopup={props.isOpenPopup}
      onClosePopup={props.onClosePopup}
      isPopupSuccess={props.isPopupSuccess}
      goToHomePage={props.goToHomePage}
      textButtonCta='Подтвердить'
      actionPopup={props.actionPopup}
      handleButtonClick={props.handleButtonClick}
    >
    <PopupMessage
      message='Вы действительно хотите отменить заявку на участие в квесте?'
    />
    </GeneralPopup>
  );
}

export default CancelQuestPopup;
