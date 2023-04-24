import './QuestCardProfile.scss';

const QuestCardProfile = (props) => {
  const handleClickCancel = () => {
    props.sendIdQuest(props.quest.id);
  }

  const handleClickChangeCategory = () => {
    props.sendChangeCategoryQuestId(props.quest.id);
  }

  return (
    <li className='quest-card-profile'>
      <h2 className='quest-card-profile__name'>
        {props.quest.name}
      </h2>
      <div className='quest-card-profile__quest-data'>
        <p className='quest-card-profile__category'>
          Категория
        </p>
        <p className='quest-card-profile__category-name'>
          {props.quest.category}
        </p>
        <p className='quest-card-profile__category-description'>
          {props.quest.description}
        </p>
        <button
          type='button'
          className='quest-card-profile__button-edit'
          onClick={handleClickChangeCategory}
        >
          Изменить
        </button>
      </div>
      <button
        type='button'
        className='quest-card-profile__button-refuse'
        onClick={handleClickCancel}
      >
        Отказаться от участия
      </button>
    </li>
  );
}

export default QuestCardProfile;