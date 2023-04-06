import { useEffect, useState } from 'react';
import './Answer.scss';

const Answer = (props) => {
  const [digits, setDigits] = useState([]);
  const [currentInput, setCurrentInput] = useState(null);

  // ToDo: fix with hook useFormAndValidation
  const handleInputNumber = (evt) => {
    const value = evt.target.value;
    evt.target.value = value.replace(/\D/g, '');
  }

  useEffect(() => {
    if (props.task.response.type === 'number') {
      const arrDigits = [];
      for (let i = 0; i < props.task.response.digits; i++) {
        arrDigits[i] = i;
      }
      setDigits(arrDigits);
    }
  }, [props.task.response]);

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
        {props.task.response.type === 'number' &&
          <div className='answer-form__field-answer answer-form__field-answer_type_number'>
            {digits && digits.map(el => {
              return (
                <input
                  type='text'
                  maxLength={1}
                  minLength={1}
                  pattern={/^[0-9]$/}
                  required
                  className='answer-form__input-number'
                  id={props.task.name}
                  name={props.task.name}
                  onInput={handleInputNumber}
                  key={el}
                />
              );
            })}
            <span className='answer-form__input-type'>Число</span>
          </div>
        }
      </label>
    </form>
  );
}

export default Answer;
