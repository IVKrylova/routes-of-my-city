import { useSelector } from 'react-redux';
import QuestItem from '../QuestItem/QuestItem';
import FormChoiceCategory from '../FormChoiceCategory/FormChoiceCategory';
import './QuestPage.scss';

const QuestPage = (props) => {
  const currentQuest = useSelector(store => store.currentQuest.currentQuest);

  return (
    <main className='quest-page'>
      <QuestItem
        quest={currentQuest}
        location={props.location}
      />
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
