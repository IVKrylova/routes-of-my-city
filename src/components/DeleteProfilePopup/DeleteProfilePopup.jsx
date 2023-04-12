import GeneralPopup from '../GeneralPopup/GeneralPopup';
import PopupMessage from '../PopupMessage/PopupMessage';

const DeleteProfilePopup = (props) => {
  return (
    <GeneralPopup
      message='Профиль удалён'
      isOpenPopup={props.isOpenPopup}
      onClosePopup={props.onClosePopup}
      isPopupSuccess={props.isPopupSuccess}
      goToHomePage={props.goToHomePage}
      textButtonCta='Удалить'
      actionPopup={props.actionPopup}
      handleButtonClick={props.handleButtonClick}
    >
    <PopupMessage
      message='Вы действительно хотите удалить свой профиль в «мой город»?'
    />
    </GeneralPopup>
  );
}

export default DeleteProfilePopup;
