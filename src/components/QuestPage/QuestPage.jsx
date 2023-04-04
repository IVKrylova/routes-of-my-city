import './QuestPage.scss';
import QuestItem from '../QuestItem/QuestItem';
import FormChoiceCategory from '../FormChoiceCategory/FormChoiceCategory';

const QuestPage = (props) => {
  return (
    <main className='quest-page'>
      {props.currentQuest &&
        <QuestItem
          quest={props.currentQuest}
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
