import Benefits from '../Benefits/Benefits';
import AboutProject from '../AboutProject/AboutProject';

import MainQuests from '../MainQuests/MainQuests';
import FaqList from '../FaqList/FaqList';
import MainBanner from '../MainBanner/MainBanner';


import './Main.scss';
const Main = (props) => {
  return (

    <main className='main-content'>
      <AboutProject />
      <Benefits />
      <MainQuests
        isNoQuests={props.isNoQuests}
        questsList={props.questsList}
        resultQuest={props.resultQuest}
        isQuestCompleted={props.isQuestCompleted}
=======
    <main className="main-content">
      <MainBanner />
      <AboutProject />
      <Benefits />
      <FaqList
        faqList={props.faqList}
        handleOpenAnswer={props.handleOpenAnswer}

      />
    </main>
  );
}

export default Main;
