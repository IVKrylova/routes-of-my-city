import Answer from '../Answer/Answer';
import ButtonGoBack from '../ButtonGoBack/ButtonGoBack';
import './AnswerPage.scss';

const AnswerPage = (props) => {
  return (
    <main className='answer-page'>
      <ButtonGoBack
        handleGoBack={props.handleGoBack}
        nameClass='answer-page__button-go-back'
      />
      <section className='answer-page__description'>
        <p className='answer-page__task-number'>
          {props.task.number}
        </p>
        <p className='answer-page__task-title'>
          {props.task.name}
        </p>
      </section>
      <Answer
        task={props.task}
        handleGoBack={props.handleGoBack}
      />
    </main>
  );
}

export default AnswerPage;
