import CardTask from '../CardTask/CardTask';
import Timer from '../Timer/Timer';
import './ListExercise.scss';

const ListExercise = (props) => {
  return (
    <section className='list-exercise'>
      {/* ToDo: add GoBack */}
      {/* ToDo: quest name dynamic rendering */}
      <h1 className='list-exercise__title'>Маршруты моего города</h1>
      <div className='list-exercise__info'>
        {/* ToDo: category dynamic rendering */}
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
              key={el.id}
              number={el.number}
              name={el.name}
              img={el.img}
              id={el.id}
              sentCardTaskId={props.handleCardClick}
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
