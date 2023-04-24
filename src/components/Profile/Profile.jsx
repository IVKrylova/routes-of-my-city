import { Link } from 'react-router-dom';
import QuestCardProfile from '../QuestCardProfile/QuestCardProfile';
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard';
import ButtonGoBack from '../ButtonGoBack/ButtonGoBack';
import './Profile.scss';

const Profile = (props) => {
  // ToDo: set up validation and add handler
  const handleChange = () => {};

  return (
    <main className='profile'>
      <ButtonGoBack
        goBack={props.goBack}
        nameClass='button-go-back__place_profile'
      />
      <h1 className='profile__title'>Личный кабинет</h1>
      <form className='profile__form-name' id='edit-team-name'>
        <input
          className='profile__form-input'
          value={props.team.name}
          onChange={handleChange}
        />
      </form>
      <p className='profile__number'>
        Участники<span className='profile__span-number'>{props.team.membersNumber}</span>
      </p>
      <ul className='profile__team-members'>
        {props.teamPlayers && props.teamPlayers.map(el => {
          return (
            <TeamMemberCard
              player={el}
              key={el.id}
              sendDeletedPlayer={props.sendDeletedPlayer}
              handleClickAddPlayer={props.handleClickAddPlayer}
              sendEditedPlayer={props.handleClickEditPlayer}
            />
          );
        })}
      </ul>
      <p className='profile__number'>
        Квесты<span className='profile__span-number'>{props.teamQuestList.length}</span>
      </p>
      <div className='profile__settings-wrap'>
        {props.teamQuestList && props.teamQuestList.length > 0 &&
          <ul className='profile__quest-list'>
            {props.teamQuestList.map(el => {
              return (
                <QuestCardProfile
                  quest={el}
                  key={el.id}
                  sendIdQuest={props.sendIdQuest}
                  sendChangeCategoryQuestId={props.sendChangeCategoryQuestId}
                />
              );
            })}
          </ul>
        }
        {props.teamQuestList && props.teamQuestList.length === 0 &&
          <div className='profile__no-quest'>
            <p className='profile__message'>
              Пока вы не подверждали своё участие в предстоящем квесте
            </p>
            <Link to='/#main-quests' className='profile__link-to-quests'>
              Участвовать
            </Link>
          </div>
        }
        <ul className='profile__settings'>
          <li>
            <button
              type='button'
              className='profile__button'
              onClick={props.openPopupChangePassword}
            >
              Сбросить пароль
            </button>
          </li>
          <li>
            <button
              type='button'
              className='profile__button'
              onClick={props.handleClickDeleteProfile}
            >
              Удалить профиль
            </button>
          </li>
        </ul>
      </div>
      <button type='submit' className='profile__button-submit' form='edit-team-name'>
        Сохранить
      </button>
    </main>
  );
}

export default Profile;
