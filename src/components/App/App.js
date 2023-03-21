import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import PopupAccountData from '../PopupAccountData/PopupAccountData';
import useWindowWidth from '../../hooks/useWindowWidth';
import Main from '../Main/Main';
import './App.scss';
// ToDo: delete after getting data with API
import { quests } from '../../utils/data/quests';
import { results } from '../../utils/data/results';

function App() {
  let navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isHeaderAccountHovered, setIsHeaderAccountHovered] = useState(false);
  const [questsList, setQuestsList] = useState([]);
  const [isNoQuests, setIsNoQuests] = useState(true);
  const [isQuestCompleted, setIsQuestCompleted] = useState(false);
  const [resultQuest, setResultQuest] = useState([]);
  const screenWidth = useWindowWidth();

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  const hoverButtonHeaderAcount = () => {
    setIsHeaderAccountHovered(true);
  }

  const goToAccount = () => {
    setIsHeaderAccountHovered(false);
    // ToDo: fix rout
    navigate('/');
  }

  const clickLinkToAccount = () => {
    if (screenWidth > 768) {
      goToAccount();
    } else {
      !isHeaderAccountHovered ? setIsHeaderAccountHovered(true) : goToAccount();
    }
  }

  useEffect(() => {
    // ToDo: replace with data from API
    setQuestsList(quests);
    if (quests.length > 0) setIsNoQuests(false);
    setIsQuestCompleted(quests.some(el => el.isCompleted === true));
  }, []);

  useEffect(() => {
    if (isQuestCompleted) {
      // ToDo: replace with data from API
      setResultQuest(results)
    }
  }, [isQuestCompleted]);

  return (
    <div className="app">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        handleClickBurgerMenu={openMobileMenu}
        handleCloseMobileMenu={closeMobileMenu}
        isLogin={isLogin}
        handleHoverButtonHeaderAcount={hoverButtonHeaderAcount}
        handleClickLinkToAccount={clickLinkToAccount}
      />
      <PopupAccountData
        isHeaderAccountHovered={isHeaderAccountHovered}
        handleClickLinkToAccount={clickLinkToAccount}
      />
      <Main
        isNoQuests={isNoQuests}
        questsList={questsList}
        resultQuest={resultQuest}
      />
    </div>
  );
}

export default App;
