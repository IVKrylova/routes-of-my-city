import './Answer.scss';

const Answer = (props) => {
  return (
    <form className='answer-form'>
      <label className='answer-form__answer' htmlFor={props.task.name}>
        <span className='answer-form__first-input'>
          Введите ответ
        </span>
        {props.task.response.type === 'text' &&
          <div className='answer-form__field-answer'>
            <input
              type='text'
              maxLength={props.task.response.lengthStr}
              minLength={props.task.response.lengthStr}
              required
              className='answer-form__input-text'
              id={props.task.name}
              name={props.task.name}
            />
            <span className='answer-form__input-type'>Текст</span>
            <span className='answer-form__input-validation'>
              {`${props.task.response.lengthStr} ${props.task.response.lengthStr === 1 ? 'символ' : (props.task.response.lengthStr > 4) ? 'символов' : 'символа'}`}
            </span>
          </div>
        }
      </label>
    </form>
  );
}

export default Answer;
