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
            />
          );
        })}
      </ul>
      <div className='list-exercise__pagination'>
        <p className='list-exercise__place'>
          Страница <span className='list-exercise__page'>1</span> из <span className='list-exercise__all-page'>4</span>
        </p>
        <button
          className='list-exercise__button-next-page'
          type='button'
        >
          Загрузить ещё
        </button>
      </div>
    </section>
  );
}

export default ListExercise;
