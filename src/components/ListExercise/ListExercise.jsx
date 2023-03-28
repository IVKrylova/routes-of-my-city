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
    </section>
  );
}

export default ListExercise;
