import { Link } from 'react-router-dom';
import './CardTask.scss';

const CardTask = (props) => {
  return (
    <li className='card-task'>
      <p className='card-task__number'>
        {props.number}
      </p>
      <img
        src={props.img}
        alt={`фото задания ${props.name}`}
        className='card-task__img'
      />
      <div className='card-task__options'>
        <p className='card-task__name'>
          {props.name}
        </p>
        {/* ToDo: fix link */}
        <Link to='/' className='card-task__link-to-answer'>
          Ответить
        </Link>
      </div>
    </li>
  );
}

export default CardTask;
