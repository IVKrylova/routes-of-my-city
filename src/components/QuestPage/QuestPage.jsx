import './QuestPage.scss';
import QuestItem from '../QuestItem/QuestItem';

const QuestPage = (props) => {
  return (
    <main className='quest-page'>
      {props.currentQuest &&
        <QuestItem
          quest={props.currentQuest}
        />
      }
    </main>
  );
}

export default QuestPage;
