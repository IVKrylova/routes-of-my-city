import iconNoQuests from '../../images/icon-no-quests.svg';
import QuestItem from '../QuestItem/QuestItem';
import './MainQuests.scss';

const MainQuests = (props) => {
  const classSection = `main-quests ${props.isNoQuests ? 'main-quests_no-quests' : 'main-quests_quests'}`;

  return (
    <section className={classSection}>
      <h2 className='main-quests__section-title'>Квесты</h2>
      {props.isNoQuests &&
        <div className='main-quests__block-no-quests' >
          <img src={iconNoQuests} alt='иконка нет квестов' className='main-quests__icon-no-quests' />
          <p className='main-quests__text-no-quests'>Работаем над новым квестом…</p>
        </div>
      }
      {!props.isNoQuests && props.questsList &&
        <ul className='main-quests__quests-list'>
          {props.questsList.map(el => {
            return (
              <QuestItem
                quest={el}
                key={el.id}
              />
            );
          })}
        </ul>
      }
    </section>
  );
}

export default MainQuests;
