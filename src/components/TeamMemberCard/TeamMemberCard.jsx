import './TeamMemberCard.scss';

const TeamMemberCard = (props) => {
  return (
    <li className='team-member-card'>
      {props.player.name &&
        <>
          <div className='team-member-card__header'>
            <p className='team-member-card__status'>
              {props.player.status}
            </p>
            <button
              type='button'
              className='team-member-card__button-edit'
              aria-label='кнопка редактировать карточку игрока'
            ></button>
            <button
              type='button'
              className='team-member-card__button-delete'
              aria-label='кнопка удалить карточку игрока'
            ></button>
          </div>
          <ul className='team-member-card__data'>
            <li>{props.player.name}</li>
            <li>{props.player.phone}</li>
            <li>{props.player.email}</li>
            <li>{props.player.birthday}</li>
          </ul>
        </>
      }
      {!props.player.name &&
        <>
          <h3 className='team-member-card__status team-member-card__status_empty'>
            {props.player.status}
          </h3>
          <div className='team-member-card__data-field'>
            <button
              type='button'
              className='team-member-card__button-delete'
              aria-label='кнопка добавить игрока'
            ></button>
          </div>
        </>
      }
    </li>
  );
}

export default TeamMemberCard;
