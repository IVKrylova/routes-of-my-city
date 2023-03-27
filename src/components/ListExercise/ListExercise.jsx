import iconTimer from '../../images/icon-timer.svg';
import iconSeparator from '../../images/icon-timer-separator.svg';
import './ListExercise.scss';

const ListExercise = () => {
  return (
    <section className='list-exercise'>
      {/* ToDo: add GoBack */}
      {/* ToDo: quest name dynamic rendering */}
      <h1 className='list-exercise__title'>Маршруты моего города</h1>
      <div className='list-exercise__info'>
        {/* ToDo: category dynamic rendering */}
        <p className='list-exercise__category'>
          Велопрофи
        </p>
        <div className='list-exercise__timer'>
          <img src={iconTimer} alt='иконка таймер' className='list-exercise__timer-icon' />
          <p className='list-exercise__number'>04</p>
          <img src={iconSeparator} alt='' className='list-exercise__separator-icon' />
          <p className='list-exercise__number'>25</p>
        </div>
      </div>
    </section>
  );
}

export default ListExercise;
