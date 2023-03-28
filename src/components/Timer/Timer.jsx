import iconTimer from '../../images/icon-timer.svg';
import iconSeparator from '../../images/icon-timer-separator.svg';
import './Timer.scss';

const Timer = (props) => {
  return (
    <div className='timer'>
      <img src={iconTimer} alt='иконка таймер' className='timer__timer-icon' />
      <p className='timer__number'>{props.timerHour}</p>
      <img src={iconSeparator} alt='' className='timer__separator-icon' />
      <p className='timer__number'>{props.timerMinute}</p>
    </div>
  );
}

export default Timer;
