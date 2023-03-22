import Benefits from '../Benefits/Benefits';
import AboutProject from '../AboutProject/AboutProject';
import MainBanner from '../MainBanner/MainBanner';
import './Main.scss';

const Main = (props) => {
  return (
    <main className="main-content">
      <MainBanner />
      <AboutProject />
      <Benefits />
    </main>
  );
}

export default Main;
