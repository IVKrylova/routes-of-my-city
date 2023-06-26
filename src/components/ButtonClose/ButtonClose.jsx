import './ButtonClose.scss';
import iconClose from '../../images/icon-close.svg';

const ButtonClose = (props) => {
  return (
    <button
        type='button'
        aria-label='кнопка закрыть'
        src={iconClose}
        className='button-close'
        onClick={props.handleClose}
    ></button>
  );
}

export default ButtonClose;
