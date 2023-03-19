import AboutProject from '../AboutProject/AboutProject';
import FaqList from '../FaqList/FaqList';
import './Main.scss';

const Main = (props) => {
  return (
    <main className="main-content">
      <AboutProject />
      <FaqList
        faqList={props.faqList}
        handleOpenAnswer={props.handleOpenAnswer}
      />
    </main>
  );
}

export default Main;
