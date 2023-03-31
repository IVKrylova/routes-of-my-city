import './ButtonGoBack.scss';

const ButtonGoBack = (props) => {
  return (
    <button
      className='button-go-back'
      type='button'
      aria-label='кнопка вернуться назад'
      onClick={props.goBack}
    ></button>
  );
}

export default ButtonGoBack;
