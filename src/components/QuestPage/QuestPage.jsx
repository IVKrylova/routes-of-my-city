import './QuestPage.scss';
import QuestItem from '../QuestItem/QuestItem';
import FormChoiceCategory from '../FormChoiceCategory/FormChoiceCategory';
// ToDo: delete after adding storage
import { quests } from '../../utils/data/quests';

const QuestPage = (props) => {
  return (
    <main className='quest-page'>
      {/* props.currentQuest && */
        <QuestItem
          /* ToDo: fix after adding storage */
          quest={props.currentQuest || quests[0]}
          location={props.location}
        />
      }
      <div className='quest-page__choice'>
        <h1 className='quest-page__title'>
          Выбор категории
        </h1>
        <FormChoiceCategory
          questCategories={props.questCategories}
          handleCancelClick={props.handleCancelAndGoBack}
          sendCategory={props.sendCategory}
        />
      </div>
    </main>
  );
}

export default QuestPage;
