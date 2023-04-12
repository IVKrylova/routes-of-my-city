import './PopupMessage.scss';

const PopupMessage = (props) => {
  return (
    <p className='popup-message'>
      {props.message}
    </p>
  );
}

export default PopupMessage;
