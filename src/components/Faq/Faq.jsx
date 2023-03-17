import './Faq.scss';

const Faq = (props) => {
  return (
    <li className='faq'>
      <details className='faq__item'>
        <summary className='faq__question'>
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
