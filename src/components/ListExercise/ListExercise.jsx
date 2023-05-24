import { useSelector } from 'react-redux';
import ButtonGoBack from '../ButtonGoBack/ButtonGoBack';
import CardTask from '../CardTask/CardTask';
import Timer from '../Timer/Timer';
import './ListExercise.scss';

const ListExercise = (props) => {
  const currentQuest = useSelector(store => store.currentQuest.currentQuest);

  return (
    <section className='list-exercise'>
      <ButtonGoBack
        goBack={props.goBack}
      />
      {currentQuest &&
        <h1 className='list-exercise__title'>{currentQuest.name}</h1>
      }
      <div className='list-exercise__info'>
        <p className='list-exercise__category'>
          <span className='list-exercise__category-span'>категория</span>
          Велопрофи
        </p>
        <Timer
          timerHour={props.timerHour}
          timerMinute={props.timerMinute}
        />
      </div>
      <ul className='list-exercise__list'>
        {props.taskList && props.taskList.map(el => {
          return (
            <CardTask
              sendTaskIdByButton={props.sendTaskIdByButton}
              key={el.id}
              number={el.number}
              name={el.name}
              img={el.img}
              id={el.id}
              sendCardTaskId={props.handleCardClick}
            />
          );
        })}
      </ul>
      <div className='list-exercise__pagination'>
        <button
          className='list-exercise__previous-page'
          type='button'
          aria-label='Кнопка вернуться на предыдущую страницу'
        ></button>
        <button
          className='list-exercise__button-next-page'
          type='button'
        >
          {props.isMobile ? 'Загрузить ещё' : 'Следующая страница'}
        </button>
        <p className='list-exercise__place'>
          Страница <span className='list-exercise__page'>1</span> из <span className='list-exercise__all-page'>4</span>
        </p>
      </div>
    </section>
  );
}

export default ListExercise;
