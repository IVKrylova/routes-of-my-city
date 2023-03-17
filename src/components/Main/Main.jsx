import AboutProject from '../AboutProject/AboutProject';
import Faq from '../Faq/Faq';
import './Main.scss';

const Main = (props) => {
  return (
    <main className="main-content">
      <AboutProject />
      <Faq />
    </main>
  );
}

export default Main;
