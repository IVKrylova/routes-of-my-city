import iconNoQuests from '../../images/icon-no-quests.svg';
import './MainQuests.scss';

const MainQuests = (props) => {
  const classSection = `main-quests ${props.isNoQuests ? 'main-quests_no-quests' : ''}`;

  return (
    <section className={classSection}>
      <h2 className='main-quests__section-title'>Квесты</h2>
      {props.isNoQuests &&
        <div className='main-quests__block-no-quests' >
          <img src={iconNoQuests} alt='иконка нет квестов' className='main-quests__icon-no-quests' />
          <p className='main-quests__text-no-quests'>Работаем над новым квестом…</p>
        </div>
      }
      {!props.isNoQuests &&
        <div></div>
      }
    </section>
  );
}

export default MainQuests;
