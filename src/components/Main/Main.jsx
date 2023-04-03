import Benefits from '../Benefits/Benefits';
import AboutProject from '../AboutProject/AboutProject';
import MainQuests from '../MainQuests/MainQuests';
import FaqList from '../FaqList/FaqList';
import MainBanner from '../MainBanner/MainBanner';

import './Main.scss';
const Main = (props) => {
  return (
    <main className='main-content'>
      <MainBanner />
      <AboutProject
        hashUrl={props.hashUrl}
      />
      <Benefits />
      <MainQuests
        isNoQuests={props.isNoQuests}
        questsList={props.questsList}
        resultQuest={props.resultQuest}
        isQuestCompleted={props.isQuestCompleted}
        hashUrl={props.hashUrl}
      />
      <FaqList
        faqList={props.faqList}
        handleOpenAnswer={props.handleOpenAnswer}
        hashUrl={props.hashUrl}
      />
    </main>
  );
}

export default Main;
