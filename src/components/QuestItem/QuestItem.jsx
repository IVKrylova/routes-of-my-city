import { useState, useEffect } from 'react';
import ResultsTable from '../ResultsTable/ResultsTable';
import iconTime from '../../images/icon-quest-time.svg';
import iconPlace from '../../images/icon-quest-place.svg';
import './QuestItem.scss';

const QuestItem = ({ quest, location, sendQuestIdAndButton, isLogin, resultQuest }) => {
  const [resultData, setResultData] = useState([]);
  const [questDate, setQuestDate] = useState('');
  const [questTime, setQuestTime] = useState('');
  const [buttonText, setButtonText] = useState('');

  const background = quest && (quest.status === 'active' ?
    {
      background: `radial-gradient(53.07% 53.07% at 33.71% 2.73%, rgba(1, 128, 162, 0.4) 0%, rgba(24, 123, 123, 0) 100%), linear-gradient(101.2deg, #003B59 15.99%, rgba(0, 59, 89, 0) 69.7%), 72% 30% / cover url(${quest.banner}) no-repeat`,
    } :
    {
      background: `radial-gradient(44.43% 53.16% at 30.93% 5.57%, rgba(1, 128, 162, 0.2) 0%, rgba(1, 128, 162, 0) 100%), linear-gradient(102.92deg, #003B59 4.72%, rgba(0, 59, 89, 0) 65.23%), linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), 3% 100% / cover url(${quest.banner})`,
    });
  const buttonClass = `quest-item__button-cta ${buttonText !== 'Регистрация завершена' ? '' : 'quest-item__button-cta_disabled'} ${location.pathname === '/' ? '' : 'quest-item__button-cta_hidden'}`;
  const cardClass =`quest-item__card ${location.pathname === '/' ? 'quest-item__card_place_home-page' : 'quest-item__card_place_quest-page'}`;

  const hendleButtonTakePart = () => {
    sendQuestIdAndButton({id: quest.id, buttonText: buttonText});
  }

  // ToDo: check logic after connection with API
  useEffect(() => {
    if (resultQuest) {
      setResultData(resultQuest.filter(el => el.questId === quest.id));
    }
  }, [resultQuest]);

  useEffect(() => {
    if (quest && quest.start_at) {
      const date = new Date(quest.start_at);
      const month = Number(date.getMonth()) < 10 ? `0${date.getMonth()}` : date.getMonth();
      setQuestDate(`${date.getDate()}.${month}.${date.getFullYear()}`);
      setQuestTime(`${date.getHours()}:${date.getMinutes()}`);
    }
  }, [quest]);

  useEffect(() => {
    // ToDo: check activ or comming
    // ToDo: add checking quests list of the team
    if (quest && quest.status === 'active') {
      setButtonText(isLogin ? 'Играть' : 'Регистрация завершена');
    } else if (quest && quest.status === 'coming') {
      setButtonText('Участвовать')
    } else if (quest && quest.status === 'finished') {
      setButtonText('Регистрация завершена');
    }
  }, [quest, isLogin]);

  if (quest) {
    return (
      <div className='quest-item'>
        <div className={cardClass} style={background}>
          <h3 className='quest-item__title'>{quest.name}</h3>
          <p className='quest-item__description'>{quest.description}</p>
          <p className='quest-item__data'>{questDate}</p>
          {(quest.status === 'active' || quest.status === 'coming') &&
            <div className='quest-item__time'>
              <img className='quest-item__icon-time' src={iconTime} alt='иконка время' />
              <p className='quest-item__text-time'>{questTime}</p>
            </div>
          }
          {(quest.status === 'active' || quest.status === 'coming') &&
            <div className='quest-item__place'>
              <img className='quest-item__icon-place' src={iconPlace} alt='иконка адрес' />
              <p className='quest-item__address'>{quest.address}</p>
            </div>
          }
          <button
            className={buttonClass}
            type='button'
            onClick={hendleButtonTakePart}
            disabled={buttonText === 'Регистрация завершена'}
          >
            {buttonText}
          </button>
        </div>
        {quest.isCompleted &&
          <ResultsTable
            questId={quest.id}
            result={resultData}
          />
        }
      </div>
    );
  }
}

export default QuestItem;
