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
      isOpenPopopAddPlayer={props.isOpenPopopAddPlayer}
    >
      <FormPlayer
        sendDataForm={props.sendDataForm}
        title='Редактировать игрока'
        button='Сохранить'
        defaultName={props.editedPlayer.name}
        defaultPhone={props.editedPlayer.phone}
        defaultEmail={props.editedPlayer.email}
        defaultBirthday={props.editedPlayer.birthday}
        defaultCaptain={props.editedPlayer.status === 'Капитан'}
      />
    </GeneralPopup>
  );
}

export default PopupEditPlayer;
