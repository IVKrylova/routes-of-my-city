import { useState } from 'react';
import './Faq.scss';

const Faq = (props) => {
  const [isAnswerOpened, setIsAnswerOpened] = useState(false);
  const summeryClass = `faq__question ${isAnswerOpened ? 'faq__question_opened' : ''}`;

  const handleClickQuestion = (evt) => {
    evt.preventDefault();

    if (!evt.target.closest('.faq__item').open) {
      setIsAnswerOpened(true);
    } else {
      setIsAnswerOpened(false);
    }
  }

  return (
    <li className='faq'>
      <details className='faq__item' open={isAnswerOpened}>
        <summary
          className={summeryClass}
          onClick={handleClickQuestion}
          id={props.faq.id}
        >
          {props.faq.question}
        </summary>
        <p className='faq__answer'>
          {props.faq.answer}
        </p>
      </details>
    </li>
  );
}

export default Faq;
