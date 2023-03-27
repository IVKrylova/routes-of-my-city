import './TeamMemberCard.scss';

const TeamMemberCard = (props) => {
  return (
    <li className={`team-member-card ${props.player.name ? '' : 'team-member-card_empty'}`}>
      {props.player.name &&
        <>
          <div className='team-member-card__header'>
            <div className='team-member-card__edit-block'>
              <p className='team-member-card__status'>
                {props.player.status}
              </p>
              <button
                type='button'
                className='team-member-card__button-edit'
                aria-label='кнопка редактировать карточку игрока'
              ></button>
            </div>
            <button
              type='button'
              className='team-member-card__button-delete'
              aria-label='кнопка удалить карточку игрока'
            ></button>
          </div>
          <ul className='team-member-card__data'>
            <li className='team-member-card__item'>
              {props.player.name}
            </li>
            <li className='team-member-card__item'>
              {props.player.phone}
            </li>
            <li className='team-member-card__item'>
              {props.player.email}
            </li>
            <li className='team-member-card__item'>
              {props.player.birthday}
            </li>
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
              className='team-member-card__button-add'
              aria-label='кнопка добавить игрока'
            ></button>
          </div>
        </>
      }
    </li>
  );
}

export default TeamMemberCard;
