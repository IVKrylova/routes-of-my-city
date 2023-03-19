
import Benefits from '../Benefits/Benefits';
import AboutProject from '../AboutProject/AboutProject';

import './Main.scss';

const Main = (props) => {
  return (
    <main className="main-content">
      <Benefits />
      <AboutProject />
    </main>
  );
}

export default Main;
