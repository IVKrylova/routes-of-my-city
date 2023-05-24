import './CardTask.scss';

const CardTask = (props) => {
  const handleImgClick = () => {
    props.sendCardTaskId(props.id);
  }

  const handleButtonClick = () => {
    props.sendTaskIdByButton(props.id);
  }

  return (
    <li className='card-task'>
      <p className='card-task__number'>
        {props.number}
      </p>
      <img
        src={props.img}
        alt={`фото задания ${props.name}`}
        className='card-task__img'
        onClick={handleImgClick}
      />
      <div className='card-task__options'>
        <p className='card-task__name'>
          {props.name}
        </p>
        <button
          onClick={handleButtonClick}
          className='card-task__link-to-answer'
          type='button'
        >
          Ответить
        </button>
      </div>
    </li>
  );
}

export default CardTask;
