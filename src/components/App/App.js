import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import PopupAccountData from '../PopupAccountData/PopupAccountData';
import useWindowWidth from '../../hooks/useWindowWidth';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.scss';

// ToDo: delete after getting data with API
import { quests } from '../../utils/data/quests';
import { results } from '../../utils/data/results';

// ToDo: delete after getting API data
import { faq } from '../../utils/data/faq';


function App() {
  let navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isHeaderAccountHovered, setIsHeaderAccountHovered] = useState(false);
  const [questsList, setQuestsList] = useState([]);
  const [isNoQuests, setIsNoQuests] = useState(true);
  const [isQuestCompleted, setIsQuestCompleted] = useState(false);
  const [resultQuest, setResultQuest] = useState([]);
  const [faqList, setFaqList] = useState([]);

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

  const handleOpenAnswer = (faqId) => {
    const newFaqList = faqList.map(el => {
      if (el.id === faqId && el.opened === true) {
        el.opened = false;
      } else {
        el.id === faqId ? el.opened = true : el.opened = false;
      }
      return el;
    });
    setFaqList(newFaqList);
  }

  useEffect(() => {
    // ToDo: replace with API data
    const faqs = faq.map(el => {
      el.opened = false;
      return el;
    });
    setFaqList(faqs);
  }, []);


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
        isQuestCompleted={isQuestCompleted}
        faqList={faqList}
        handleOpenAnswer={handleOpenAnswer}
      />
      <Footer />

    </div>
  );
}

export default App;
