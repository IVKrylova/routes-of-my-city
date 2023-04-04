import { useState, useEffect } from 'react';
import ResultsTable from '../ResultsTable/ResultsTable';
import iconTime from '../../images/icon-quest-time.svg';
import iconPlace from '../../images/icon-quest-place.svg';
import './QuestItem.scss';

const QuestItem = (props) => {
  const [resultData, setResultData] = useState([]);

  const background = props.quest.isActive ?
    {
      background: `radial-gradient(53.07% 53.07% at 33.71% 2.73%, rgba(1, 128, 162, 0.4) 0%, rgba(24, 123, 123, 0) 100%), linear-gradient(101.2deg, #003B59 15.99%, rgba(0, 59, 89, 0) 69.7%), 72% 30% / cover url(${props.quest.img}) no-repeat`,
    } :
    {
      background: `radial-gradient(44.43% 53.16% at 30.93% 5.57%, rgba(1, 128, 162, 0.2) 0%, rgba(1, 128, 162, 0) 100%), linear-gradient(102.92deg, #003B59 4.72%, rgba(0, 59, 89, 0) 65.23%), linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), 3% 100% / cover url(${props.quest.img})`,
    };
  const buttonClass = `quest-item__button-cta ${props.quest.isActive ? '' : 'quest-item__button-cta_disabled'} ${props.location.pathname === '/' ? '' : 'quest-item__button-cta_hidden'}`;
  const cardClass =`quest-item__card ${props.location.pathname === '/' ? 'quest-item__card_place_home-page' : 'quest-item__card_place_quest-page'}`;

  const hendleButtonTakePart = () => {
    if (props.quest.isActive) props.sendQuestId(props.quest.id);
  }

  // ToDo: check logic after connection with API
  useEffect(() => {
    if (props.resultQuest) {
      setResultData(props.resultQuest.filter(el => el.questId === props.quest.id));
    }
  }, [props.resultQuest]);

  return (
    <div className='quest-item'>
      <div className={cardClass} style={background}>
        <h3 className='quest-item__title'>{props.quest.name}</h3>
        <p className='quest-item__description'>{props.quest.description}</p>
        <p className='quest-item__data'>{props.quest.date}</p>
        {props.quest.isActive &&
          <div className='quest-item__time'>
            <img className='quest-item__icon-time' src={iconTime} alt='иконка время' />
            <p className='quest-item__text-time'>{props.quest.time}</p>
          </div>
        }
        {props.quest.isActive &&
          <div className='quest-item__place'>
            <img className='quest-item__icon-place' src={iconPlace} alt='иконка адрес' />
            <p className='quest-item__address'>{props.quest.place}</p>
          </div>
        }
        <button className={buttonClass} type='button' onClick={hendleButtonTakePart}>
          {props.quest.isActive ? 'Участвовать' : 'Регистрация завершена'}
        </button>
      </div>
      {props.quest.isCompleted &&
        <ResultsTable
          questId={props.quest.id}
          result={resultData}
        />
      }
    </div>
  );
}

export default QuestItem;
