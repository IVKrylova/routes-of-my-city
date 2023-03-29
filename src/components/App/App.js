import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import PopupAccountData from '../PopupAccountData/PopupAccountData';
import useWindowWidth from '../../hooks/useWindowWidth';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ListExercise from '../ListExercise/ListExercise';
import './App.scss';
// ToDo: delete after getting API data
import { faq } from '../../utils/data/faq';
import { tasks } from '../../utils/data/listTask';

function App() {
  let navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isHeaderAccountHovered, setIsHeaderAccountHovered] = useState(false);
  const [faqList, setFaqList] = useState([]);
  const [deadline, setDeadline] = useState(null);
  const [timerHour, setTimerHour] = useState('00');
  const [timerMinute, setTimerMinute] = useState('00');
  const [taskList, setTaskList] = useState([]);
  const [isMobile, setIsMobile] = useState(true);
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

  const getRemainingTime = () => {
    const total = Date.parse(deadline) - Date.parse(new Date());
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);

    return { total, hours, minutes };
  }

  const startTimer = () => {
    const { total, hours, minutes } = getRemainingTime();
    if (total >= 0) {
      const h = hours > 9 ? hours : '0' + hours;
      const m = minutes > 9 ? minutes : '0' + minutes;
      setTimerHour(h);
      setTimerMinute(m);
    }
  }

  useEffect(() => {
    // ToDo: replace with API data
    const faqs = faq.map(el => {
      el.opened = false;
      return el;
    });
    setFaqList(faqs);
  }, []);

  useEffect(() => {
    // ToDo: replace with API data
    //       fix logic => if (isCurrentQuest === true) setTaskList(quest.taskList)
    //       add isCurrentQuest to dependencies
    setTaskList(tasks);
  }, []);

  useEffect(() => {
    // ToDo: fix logic => if (isCurrentQuest === true) setDeadline(quest.deadline)
    //       add isCurrentQuest to dependencies
    const date = new Date('Tue Mar 28 2023 16:00:00 GMT+0300 (Москва, стандартное время)');
    setDeadline(date);
  }, []);

  useEffect(() => {
    startTimer();
    setInterval(() => startTimer(), 1000);
  }, [deadline]);

  useEffect(() => {
    screenWidth >= 768 ? setIsMobile(false) : setIsMobile(true);
  }, [screenWidth]);

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
        faqList={faqList}
        handleOpenAnswer={handleOpenAnswer}
      />
      <Footer />
      <ListExercise
        timerHour={timerHour}
        timerMinute={timerMinute}
        taskList={taskList}
        isMobile={isMobile}
      />
    </div>
  );
}

export default App;
