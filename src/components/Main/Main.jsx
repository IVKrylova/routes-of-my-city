import Benefits from '../Benefits/Benefits';
import AboutProject from '../AboutProject/AboutProject';
import FaqList from '../FaqList/FaqList';
import MainBanner from '../MainBanner/MainBanner';

import './Main.scss';

const Main = (props) => {
  return (
    <main className="main-content">
      <MainBanner />
      <AboutProject />
      <FaqList
        faqList={props.faqList}
        handleOpenAnswer={props.handleOpenAnswer}
      />
      <Benefits />
    </main>
  );
}

export default Main;
