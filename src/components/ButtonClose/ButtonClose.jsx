import './ButtonClose.scss';

const ButtonClose = (props) => {
  return (
    <button
        type='button'
        aria-label='кнопка закрыть'
        className='button-close'
        onClick={props.handleClose}
    ></button>
  );
}

export default ButtonClose;
