import './ButtonGoBack.scss';

const ButtonGoBack = (props) => {
  return (
    <button
      className={`button-go-back ${props.nameClass ? props.nameClass : ''}`}
      type='button'
      aria-label='кнопка вернуться назад'
      onClick={props.goBack}
    ></button>
  );
}

export default ButtonGoBack;
