import GeneralPopup from '../GeneralPopup/GeneralPopup';
import FormPlayer from '../FormPlayer/FormPlayer';

const PopupAddPlayer = (props) => {
  return (
    <GeneralPopup
      message='Изменения сохранены'
      isOpenPopup={props.isOpenPopup}
      onClosePopup={props.onClosePopup}
      isPopupSuccess={props.isPopupSuccess}
      goToHomePage={props.goToHomePage}
      isOpenPopopAddPlayer={props.isOpenPopopAddPlayer}
    >
      <FormPlayer
        sendDataForm={props.sendDataForm}
        title='Добавить игрока'
        button='Добавить'
        defaultName=''
        defaultPhone=''
        defaultEmail=''
        defaultBirthday=''
        defaultCaptain={false}
        idName='add-name'
        idPhone='add-tel'
        idEmail='add-email'
        idBirthday='add-birthday'
        idCaptain='add-captain'
      />
    </GeneralPopup>
  );
}

export default PopupAddPlayer;