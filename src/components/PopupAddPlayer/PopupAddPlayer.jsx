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
      textButtonCta='Сохранить'
      isOpenPopopAddPlayer={props.isOpenPopopAddPlayer}
    >
      <FormPlayer
        sendDataForm={props.sendDataForm}
      />
    </GeneralPopup>
  );
}

export default PopupAddPlayer;
