import GeneralPopup from '../GeneralPopup/GeneralPopup';
import PopupMessage from '../PopupMessage/PopupMessage';

const DeletePlayerPopup = (props) => {
  return (
    <GeneralPopup
      message='Изменения сохранены'
      isOpenPopup={props.isOpenPopup}
      onClosePopup={props.onClosePopup}
      isPopupSuccess={props.isPopupSuccess}
      goToHomePage={props.goToHomePage}
      textButtonCta='Удалить'
      actionPopup={props.actionPopup}
      handleButtonClick={props.handleButtonClick}
    >
    <PopupMessage
      message='Вы действительно хотите удалить игрока?'
    />
    </GeneralPopup>
  );
}

export default DeletePlayerPopup;
