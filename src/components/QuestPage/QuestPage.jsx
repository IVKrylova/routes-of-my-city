import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import QuestItem from '../QuestItem/QuestItem';
import FormChoiceCategory from '../FormChoiceCategory/FormChoiceCategory';
import { getQuestCategory } from '../../utils/api';
import './QuestPage.scss';

const QuestPage = ({ location, handleCancelAndGoBack, sendCategory }) => {
  const currentQuest = useSelector(store => store.currentQuest.currentQuest);
  const [questCategories, setQuestCategories] = useState([]);

  useEffect(() => {
    if (currentQuest) {
      getQuestCategory(currentQuest.id)
        .then(res => {
          setQuestCategories(res);
        })
        .catch(err => console.log(err));
    }
  }, [currentQuest]);

  return (
    <main className='quest-page'>
      <QuestItem
        quest={currentQuest}
        location={location}
      />
      <div className='quest-page__choice'>
        <h1 className='quest-page__title'>
          Выбор категории
        </h1>
        <FormChoiceCategory
          questCategories={questCategories}
          handleCancelClick={handleCancelAndGoBack}
          sendCategory={sendCategory}
        />
      </div>
    </main>
  );
}

export default QuestPage;
