import './PopupMessage.scss';

const PopupMessage = (props) => {
  return (
    <p className={`popup-message ${props.classModifier ? props.classModifier : ''}`}>
      {props.message}
    </p>
  );
}

export default PopupMessage;
