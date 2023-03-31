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
import { INITIAL_STATE_TEAM } from '../../utils/constants';
// ToDo: delete after getting API data
import { quests } from '../../utils/data/quests';
import { results } from '../../utils/data/results';
import { faq } from '../../utils/data/faq';
import { teams } from '../../utils/data/teams';

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
  /* ToDo: remove footer in PageNotFound */
  const [isPageNotFound, setIsPageNotFound] = useState(false);
  const [team, setTeam] = useState(INITIAL_STATE_TEAM);
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [teamQuestList, setTeamQuestList] = useState([]);
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

  /* ToDo: set up authorization, team data will be received by authorization  =>
  replace useEffect with function sign in */
  useEffect(() => {
    setTeam(teams);
  }, []);

  /* ToDo: check logics with API data */
  useEffect(() => {
    const players = [];
    let count = 2;
    for (let i = 0; i < 5; i++) {
      players.push(team.members[i]);
      if (!players[i]) {
        players[i] = {
          status: '',
          name: '',
          phone: '',
          email: '',
          birthday: '',
          id: Math.random(),
        }
      }
      if (players[i].status === 'игрок' || (players[i].status === '')) {
        players[i].status = `${count} игрок`;
        count++;
      }
    }
    setTeamPlayers(players);
  }, [team]);

  /* ToDo: check logics with API data */
  useEffect(() => {
    const quests = [];
    for (let key in team.quests) {
      quests.push(team.quests[key]);
    }
    setTeamQuestList(quests);
  }, [team]);

  // ToDo: set up routing
  const handleGoBack = () => {

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

  const clickButtonExit = () => {
    navigate('/');
    setIsHeaderAccountHovered(false);
    setIsLogin(false);
  }

  /* ToDo: check logics with API data and popup*/
  const handleDeletePlayer = (playerId) => {
    const team = teamPlayers.map(el => {
      if (el.id === playerId) {
        el.name = '';
        el.phone = '';
        el.email = '';
        el.birthday = '';
        el.id = Math.random();
      }

      return el;
    });
    setTeamPlayers(team);
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
              <Profile
                team={team}
                teamPlayers={teamPlayers}
                teamQuestList={teamQuestList}
                goBack={handleGoBack}
                sendDeletedPlayer={handleDeletePlayer}
              />
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
              isNoQuests={isNoQuests}
              questsList={questsList}
              resultQuest={resultQuest}
              isQuestCompleted={isQuestCompleted}
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
        handleClickButtonExit={clickButtonExit}
      />
      <Footer />
      <Profile
        team={team}
        teamPlayers={teamPlayers}
        teamQuestList={teamQuestList}
        goBack={handleGoBack}
        sendDeletedPlayer={handleDeletePlayer}
      />
    </div>
  );
}

export default App;
