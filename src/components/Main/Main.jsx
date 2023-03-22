import Benefits from '../Benefits/Benefits';
import AboutProject from '../AboutProject/AboutProject';
import MainQuests from '../MainQuests/MainQuests';
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
      />
    </main>
  );
}

export default Main;
