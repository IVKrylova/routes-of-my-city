import iconNoQuests from '../../images/icon-no-quests.svg';
import QuestItem from '../QuestItem/QuestItem';
import blend from '../../images/quests-blend.png';
import './MainQuests.scss';

const MainQuests = (props) => {
  const classSection = `main-quests ${props.isNoQuests ? 'main-quests_no-quests' : 'main-quests_quests'} ${props.isQuestCompleted ? 'main-quests_table' : ''}`;
  const blendClass = `main-quests__blend-img ${props.isQuestCompleted ? 'main-quests__blend-img_result' : 'main-quests__blend-img_no-result'}`;

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
                resultQuest={props.resultQuest}
              />
            );
          })}
        </ul>
      }
      {!props.isNoQuests &&
        <img className={blendClass} alt='' src={blend} />
      }
    </section>
  );
}

export default MainQuests;