import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import PopupAccountData from '../PopupAccountData/PopupAccountData';
import useWindowWidth from '../../hooks/useWindowWidth';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import QuestPage from '../QuestPage/QuestPage';
import ListExercise from '../ListExercise/ListExercise';
import Task from '../Task/Task';
import Answer from '../Answer/Answer';
import Rules from '../Rules/Rules';
import './App.scss';
// ToDo: delete after getting API data
import { faq } from '../../utils/data/faq';

function App() {
  let navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isHeaderAccountHovered, setIsHeaderAccountHovered] = useState(false);
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
    navigate('/profile');
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

  const clickButtonLogin = () => {
    navigate('/login');
    setIsMobileMenuOpen(false);
  }

  const clickButtonSignUp = () => {
    navigate('/signup');
    setIsMobileMenuOpen(false);
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
        handleClickButtonLogin={clickButtonLogin}
        handleClickButtonSignUp={clickButtonSignUp}
      />
      <Routes>
        <Route element={ <ProtectedRoute isLogin={isLogin} /> }>
          <Route
            path='/profile'
            component={
              <Profile />
            }
          />
        </Route>
        <Route element={ <ProtectedRoute isLogin={isLogin} /> }>
          <Route
            path='/quest/:name/list-exercise'
            component={
              <ListExercise />
            }
          />
        </Route>
        <Route element={ <ProtectedRoute isLogin={isLogin} /> }>
          <Route
            path='/quest/:name/task/:id'
            component={
              <Task />
            }
          />
        </Route>
        <Route element={ <ProtectedRoute isLogin={isLogin} /> }>
          <Route
            path='/quest/:name/answer/:id'
            component={
              <Answer />
            }
          />
        </Route>
        <Route
          path='/'
          element={
            <Main
              faqList={faqList}
              handleOpenAnswer={handleOpenAnswer}
            />
          }
        />
        <Route
          path='/quest/:name'
          element={
            <QuestPage />
          }
        />
        <Route
          path='/signup'
          element={
            <Register />
          }
        />
        <Route
          path='/login'
          element={
            <Login />
          }
        />
        <Route
          path='/rules'
          element={
            <Rules />
          }
        />
        <Route
          path='*'
          element={
            <PageNotFound />
          }
        />
      </Routes>
      <PopupAccountData
        isHeaderAccountHovered={isHeaderAccountHovered}
        handleClickLinkToAccount={clickLinkToAccount}
      />
      <Footer />
    </div>
  );
}

export default App;
