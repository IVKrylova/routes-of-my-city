import GeneralPopup from '../GeneralPopup/GeneralPopup';
import FormPlayer from '../FormPlayer/FormPlayer';

const PopupEditPlayer = (props) => {
  return (
    <GeneralPopup
      message='Изменения сохранены'
      isOpenPopup={props.isOpenPopup}
      onClosePopup={props.onClosePopup}
      isPopupSuccess={props.isPopupSuccess}
      goToHomePage={props.goToHomePage}
      isOpenPopopEditPlayer={props.isOpenPopopEditPlayer}
    >
      <FormPlayer
        sendDataForm={props.sendDataForm}
        title='Редактировать игрока'
        button='Сохранить'
        player={props.editedPlayer}
        idName='edit-name'
        idPhone='edit-tel'
        idEmail='edit-email'
        idBirthday='edit-birthday'
        idCaptain='edit-captain'
        isOpenPopopEditPlayer={props.isOpenPopopEditPlayer}
      />
    </GeneralPopup>
  );
}

export default PopupEditPlayer;
