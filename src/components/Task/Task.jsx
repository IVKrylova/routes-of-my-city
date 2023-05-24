import Answer from '../Answer/Answer';
import './Task.scss';

const Task = (props) => {
  return (
    <main className='task-page'>
      <div className='task-page__task'>
        <div className='task-page__block-img'>
          <p className='task-page__task-number'>
            {props.task.number}
          </p>
          {/* ToDo: fix after connecting with API */}
          <img className='task-page__task-img' src={props.task.img} alt={`фото к заданию ${props.task.name}`} />
        </div>
        {/* ToDo: fix after connecting with API */}
        <div className='task-page__description'>
          <p className='task-page__title'>
            {props.task.name}
          </p>
          {props.task.problem && props.task.problem.map(el => {
            return (
              <p className='task-page__text' key={props.task.problem.indexOf(el)}>
                {el}
              </p>
            );
          })}
        </div>
      </div>
      <Answer
        task={props.task}
        handleGoBack={props.handleGoBack}
      />
    </main>
  );
}

export default Task;
