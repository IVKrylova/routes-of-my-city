import './Faq.scss';

const Faq = (props) => {
  const summeryClass = `faq__question ${props.faq.opened ? 'faq__question_opened' : ''}`;

  const handleClickQuestion = (evt) => {
    evt.preventDefault();
    props.sentFaq(props.faq.id);
  }

  return (
    <li className='faq'>
      <details className='faq__item' open={props.faq.opened}>
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
