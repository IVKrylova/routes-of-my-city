import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';

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
import DeletePlayerPopup from '../DeletePlayerPopup/DeletePlayerPopup';
import CancelQuestPopup from '../CancelQuestPopup/CancelQuestPopup';
import DeleteProfilePopup from '../DeleteProfilePopup/DeleteProfilePopup';
import PopupChangeQuestCategory from '../PopupChangeQuestCategory/PopupChangeQuestCategory';
import Rules from '../Rules/Rules';
import AnswerPage from '../AnswerPage/AnswerPage';
import PopupAddPlayer from '../PopupAddPlayer/PopupAddPlayer';
import PopupEditPlayer from '../PopupEditPlayer/PopupEditPlayer';
import PopupResetPassword from '../PopupResetPassword/PopupResetPassword';
import PopupChangePassword from '../PopupChangePassword/PopupChangePassword';
import AuthRoute from '../AuthRoute/AuthRoute';
import {
  INITIAL_STATE_TEAM,
  PATH_LIST,
  INITIAL_STATE_TASK,
} from '../../utils/constants';
import { getQuests, getQuestCategory } from '../../utils/api';
import { setQuests } from '../../store/actionCreators/questsAction';
import { setCurrentQuest } from '../../store/actionCreators/currentQuestAction';
import './App.scss';

// ToDo: delete after getting API data
import { results } from '../../utils/data/results';
import { faq } from '../../utils/data/faq';
import { teams } from '../../utils/data/teams';
import { tasks } from '../../utils/data/listTask';
import { taskItem } from '../../utils/data/task';

function App() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const quests = useSelector(store => store.quests.quests);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isHeaderAccountHovered, setIsHeaderAccountHovered] = useState(false);
  const [isNoQuests, setIsNoQuests] = useState(true);
  const [isQuestCompleted, setIsQuestCompleted] = useState(false);
  const [resultQuest, setResultQuest] = useState([]);
  const [faqList, setFaqList] = useState([]);
  const [isPageNotFound, setIsPageNotFound] = useState(false);
  const [team, setTeam] = useState(INITIAL_STATE_TEAM);
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [teamQuestList, setTeamQuestList] = useState([]);
  const [deadline, setDeadline] = useState(null);
  const [timerHour, setTimerHour] = useState('00');
  const [timerMinute, setTimerMinute] = useState('00');
  const [taskList, setTaskList] = useState([]);
  const [isMobile, setIsMobile] = useState(true);
  const [pathList, setPathList] = useState(PATH_LIST);
  const [currentQuestId, setCurrentQuestId] = useState(null);
  const [task, setTask] = useState(INITIAL_STATE_TASK);
  const [isOpenDeletePlayerPopup, setIsOpenDeletePlayerPopup] = useState(false);
  const [isPopupSuccess, setIsPopupSuccess] = useState(false);
  const [deletedPlayerId, setDeletedPlayerId] = useState(null);
  const [isOpenCancelQuestPopup, setIsOpenCancelQuestPopup] = useState(false);
  const [canceledQuestId, setCanceledQuestId] = useState(null);
  const [isOpenDeleteProfilePopup, setIsOpenDeleteProfilePopup] = useState(false);
  const [isOpenPopupChangeQuestCategory, setIsOpenPopupChangeQuestCategory] = useState(false);
  const [changedCategoryQuestId, setChangedCategoryQuestId] = useState(null);
  const [questCategoriesToChange, setQuestCategoriesToChange] = useState([]);
  const [isOpenPopopAddPlayer, setIsOpenPopopAddPlayer] = useState(false);
  const [isOpenPopopEditPlayer, setIsOpenPopopEditPlayer] = useState(false);
  const [isOpenPopupResetPassword, setIsOpenPopupResetPassword] = useState(false);
  const [editedPlayer, setEditedPlayer] = useState({});
  const [isOpenPopupChangePassword, setIsOpenPopupChangePassword] = useState(false);
  const screenWidth = useWindowWidth();
  let location = useLocation();

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
    getQuests()
      .then(res => {
        const quests = res.results;
        dispatch(setQuests(quests));
        if (quests.length > 0) setIsNoQuests(false);
        setIsQuestCompleted(quests.some(el => el.status === 'finished'));
      })
      .catch(err => console.log(err));
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

  const handleGoBack = () => {
    navigate(-1);
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
  const handleDeletePlayer = () => {
    const team = teamPlayers.map(el => {
      if (el.id === deletedPlayerId) {
        el.name = '';
        el.phone = '';
        el.email = '';
        el.birthday = '';
        el.id = Math.random();
      }

      return el;
    });
    setTeamPlayers(team);
    // ToDo: if deleting successfull
    setIsPopupSuccess(true);
     // ToDo: fix with Redux
    setDeletedPlayerId(null);
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

  const handleCardClick = (id) => {
    navigate(`/quest/${currentQuestId}/task/${id}`);
  }

  const handleClickTakePart = ({ id, buttonText}) => {
    {/* ToDo: add checking quests list of the team */}
    setCurrentQuestId(id);
    !isLogin ? navigate(`/quest/${id}`) : navigate(`/quest/${id}/list-exercise`);
  }

  const handleCancelAndGoBack = () => {
    isOpenPopupChangeQuestCategory
      ? setIsOpenPopupChangeQuestCategory(false)
      : navigate(-1);
  }

  const handleFormChoiceCategory = (category) => {
    // ToDo: send data with API
    console.log(category);
  }

  const goToAnswer = (id) => {
    navigate(`/quest/${currentQuestId}/answer/${id}`);
  }

  const closeAllPopup = () => {
    setIsOpenDeletePlayerPopup(false);
    setIsOpenCancelQuestPopup(false);
    setIsOpenDeleteProfilePopup(false);
    setIsOpenPopupChangeQuestCategory(false);
    setIsOpenPopopAddPlayer(false);
    setIsOpenPopopEditPlayer(false);
    setIsOpenPopupResetPassword(false);
    setIsOpenPopupChangePassword(false);
    setTimeout(() => setIsPopupSuccess(false), 1000);
  }

  const handleBackgroundClose = (evt) => {
    if (evt.target.classList.contains('general-popup_opened')) {
      closeAllPopup();
    }
  }

  const handleButtongoToHomePage = () => {
    navigate('/');
    setIsPopupSuccess(false);
    closeAllPopup();
  }

  const openDeletePlayerPopup = (idPlayer) => {
    setDeletedPlayerId(idPlayer);
    setIsOpenDeletePlayerPopup(true);
  }

  const openDeleteProfilePopup = () => {
    setIsOpenDeleteProfilePopup(true);
  }

  // ToDo: connect API
  const handleCancelQuest = () => {
    const quests = teamQuestList.filter(el => el.id !== canceledQuestId);
    setTeamQuestList(quests);
    setIsPopupSuccess(true);
    setCanceledQuestId(null);
  }

  const openCancelQuestPopup = (questId) => {
    setCanceledQuestId(questId);
    setIsOpenCancelQuestPopup(true);
  }

  // ToDo: connect API
  const handleDeleteProfile = () => {
    setIsPopupSuccess(true);
    setIsLogin(false);
  }

  const openPopupChangeQuestCategory = (questId) => {
    setIsOpenPopupChangeQuestCategory(true);
    setChangedCategoryQuestId(questId);
    getQuestCategory(questId)
      .then(res => setQuestCategoriesToChange(res))
      .catch(err => console.log(err));

  }

  const changeCategoryInPopup = (category) => {
    // ToDo: fix with Api, use changedCategoryQuestId
    console.log(category);
    setIsPopupSuccess(true);
  }

  const openPopopAddPlayer = () => {
    setIsOpenPopopAddPlayer(true);
  }

  // ToDo: fix with Redux
  const handleFormAddPlayer = (data) => {
    const id = Math.random();
    const status = data.captain ? 'Капитан' : 'игрок';
    const player = {
      name: data.name,
      id: id,
      phone: data.tel,
      email: data.email,
      birthday: data.birthday,
      status: status,
    };

    const arr = teamPlayers.filter(el => !!el.name === true);
    if (data.captain === 'Капитан') {
      arr.map(el => el.status = 'игрок');
    }
    arr.push(player);
    if (data.captain === 'Капитан') arr.reverse();
    let count = 2;

    for (let i = 0; i < 5; i++) {
      if (!arr[i]) {
        arr[i] = {
          status: '',
          name: '',
          phone: '',
          email: '',
          birthday: '',
          id: Math.random(),
        }
      }
      if (arr[i].status !== 'Капитан') {
        arr[i].status = 'игрок';
      }
      if (arr[i].status === 'игрок' || (arr[i].status === '')) {
        arr[i].status = `${count} игрок`;
        count++;
      }
    }
    setTeamPlayers(arr);
    setIsPopupSuccess(true);
  }

  // ToDo: fix with Redux
  const handleClickEditPlayer = (id) => {
    setIsOpenPopopEditPlayer(true);
    for (let key in teams.members) {
      if (teams.members[key].id === id) setEditedPlayer(team.members[key]);
    }
  }

  // ToDo: fix with Api
  const handleFormEditPlayer = (data) => {
    setIsPopupSuccess(true);
    setEditedPlayer({});
  }

  // ToDo: check logic
  const openPopupResetPassword = () => {
    setIsOpenPopupResetPassword(true);
  }

  // ToDo: check logic
  const openPopupChangePassword = () => {
    setIsOpenPopupChangePassword(true);
  }

  // ToDo: connect API
  const handleFormChangePassword = (data) => {
    setIsPopupSuccess(true);
  }

  useEffect(_ => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopup();
      }
    };
    document.addEventListener('keydown', handleEscClose);
    return () => document.removeEventListener('keydown', handleEscClose);
  }, []);

  useEffect(() => {
    const quest = quests.find(el => el.id === currentQuestId);
    dispatch(setCurrentQuest(quest));
    // ToDo: replace with API data
    //       get tasks by currentQuestId
    setTaskList(tasks);
    // ToDo: replace with API data
    //       get date by currentQuestId
    const date = new Date('Tue Apr 03 2023 16:00:00 GMT+0300 (Москва, стандартное время)');
    setDeadline(date);
  }, [currentQuestId, quests]);

  useEffect(() => {
    // ToDo: replace with API data
    const faqs = faq.map(el => {
      el.opened = false;
      return el;
    });
    setFaqList(faqs);
  }, []);

  useEffect(() => {
    startTimer();
    setInterval(() => startTimer(), 1000);
  }, [deadline]);

  useEffect(() => {
    screenWidth >= 768 ? setIsMobile(false) : setIsMobile(true);
  }, [screenWidth]);

  /* ToDo: check logics with API data */
  useEffect(() => {
    const pathsQuests = quests.map(el => `/quest/${el.id}`);
    const pathsListExercise = quests.map(el => `/quest/${el.id}/list-exercise`);
    const pathsTasks = taskList.map(el => `/quest/${el.questId}/task/${el.id}`);
    const pathsAnswers = taskList.map(el => `/quest/${el.questId}/answer/${el.id}`);

    setPathList([...PATH_LIST, ...pathsQuests, ...pathsListExercise, ...pathsTasks, ...pathsAnswers]);
  }, [quests, taskList]);

  useEffect(() => {
    pathList.find(el => el === location.pathname) ? setIsPageNotFound(false) : setIsPageNotFound(true);
  }, [location, pathList]);

  useEffect(() => {
    // ToDo: replace with API data
    //       fix logic => find task in task list by id
    //       add url to dependencies
    //       move to the function and add to the hadnler
    let text = '';
    if (typeof(taskItem.problem) === 'string') {
      text = taskItem.problem.split('\n');
      taskItem.problem = text;
    }
    setTask(taskItem);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsHeaderAccountHovered(false);
    }
    if (isHeaderAccountHovered) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen, isHeaderAccountHovered]);

  return (
    <HelmetProvider>
      <div>
        <Helmet
          htmlAttributes={{'lang': 'ru'}}
          title='Городской квест Мой город'
          meta={[
            { 'name': 'description', 'content': 'Городской квест Мой город' },
          ]}
          link={[
            {
              'rel': 'icon',
              'type': 'image/png',
              'href': 'favicon.ico',
            }
          ]}
        />

        <div
          className={`app ${location.pathname === '/login' ? 'app_login' : ''}`}
          onClick={handleBackgroundClose}
        >
          <Header
            isMobileMenuOpen={isMobileMenuOpen}
            handleClickBurgerMenu={openMobileMenu}
            handleCloseMobileMenu={closeMobileMenu}
            isLogin={isLogin}
            handleHoverButtonHeaderAcount={hoverButtonHeaderAcount}
            handleClickLinkToAccount={clickLinkToAccount}
            handleClickButtonLogin={clickButtonLogin}
            handleClickButtonSignUp={clickButtonSignUp}
            handleClickButtonExit={clickButtonExit}
            location={location}
            screenWidth={screenWidth}
          />
          <Routes>
            <Route element={ <ProtectedRoute isLogin={isLogin} /> }>
              <Route
                path='/profile'
                element={
                  <Profile
                    team={team}
                    teamPlayers={teamPlayers}
                    teamQuestList={teamQuestList}
                    goBack={handleGoBack}
                    sendDeletedPlayer={openDeletePlayerPopup}
                    sendIdQuest={openCancelQuestPopup}
                    handleClickDeleteProfile={openDeleteProfilePopup}
                    sendChangeCategoryQuestId={openPopupChangeQuestCategory}
                    handleClickAddPlayer={openPopopAddPlayer}
                    handleClickEditPlayer={handleClickEditPlayer}
                    openPopupResetPassword={openPopupResetPassword}
                    openPopupChangePassword={openPopupChangePassword}
                  />
                }
              />
            </Route>

            <Route element={ <ProtectedRoute isLogin={isLogin} /> }>
              <Route
                path='/quest/:questId/list-exercise'
                element={
                  <ListExercise
                    timerHour={timerHour}
                    timerMinute={timerMinute}
                    taskList={taskList}
                    isMobile={isMobile}
                    handleCardClick={handleCardClick}
                    goBack={handleGoBack}
                    sendTaskIdByButton={goToAnswer}
                  />
                }
              />
            </Route>

            <Route element={ <ProtectedRoute isLogin={isLogin} /> }>
              <Route
                path='/quest/:questId/list-exercise'
                element={
                  <ListExercise
                    timerHour={timerHour}
                    timerMinute={timerMinute}
                    taskList={taskList}
                    isMobile={isMobile}
                    handleCardClick={handleCardClick}
                    goBack={handleGoBack}
                    currentQuestId={currentQuestId}
                    sendTaskIdByButton={goToAnswer}
                  />
                }
              />
            </Route>

            <Route element={ <ProtectedRoute isLogin={isLogin} /> }>
              <Route
                path='/quest/:questId/task/:id'
                element={
                  <Task
                    task={task}
                    handleGoBack={handleGoBack}
                  />
                }
              />
            </Route>

            <Route element={ <ProtectedRoute isLogin={isLogin} /> }>
              <Route
                path='/quest/:questId/answer/:id'
                element={
                  <AnswerPage
                    handleGoBack={handleGoBack}
                    task={task}
                  />
                }
              />
            </Route>

            <Route
              path='/'
              element={
                <Main
                  isNoQuests={isNoQuests}
                  resultQuest={resultQuest}
                  isQuestCompleted={isQuestCompleted}
                  faqList={faqList}
                  handleOpenAnswer={handleOpenAnswer}
                  sendQuestId={handleClickTakePart}
                  location={location}
                  isLogin={isLogin}
                />
              }
            />

            <Route
              path='/quest/:questId'
              element={
                <QuestPage
                  location={location}
                  handleCancelAndGoBack={handleCancelAndGoBack}
                  sendCategory={handleFormChoiceCategory}
                />
              }
            />
            <Route
              path='/'
              element={
                <Main
                  isNoQuests={isNoQuests}
                  resultQuest={resultQuest}
                  isQuestCompleted={isQuestCompleted}
                  faqList={faqList}
                  handleOpenAnswer={handleOpenAnswer}
                  sendQuestIdAndButton={handleClickTakePart}
                  location={location}
                  isLogin={isLogin}
                />
              }
            />
            <Route
              path='/quest/:questId'
              element={
                <QuestPage
                  location={location}
                  handleCancelAndGoBack={handleCancelAndGoBack}
                  sendCategory={handleFormChoiceCategory}
                />
              }
            />
            <Route
              path='/signup'
              element={
                <Register />
              }
            />
            <Route element={ <AuthRoute isLogin={isLogin} /> }>
              <Route
                path='/login'
                element={
                  <Login />
                }
              />
            </Route>
            <Route
              path='/rules'
              element={
                <Rules />
              }
            />
            <Route
              path='*'
              element={
                <PageNotFound
                  setIsPageNotFound={setIsPageNotFound}
                />
              }
            />
          </Routes>
          <Footer
            isPageNotFound={isPageNotFound}
            location={location}
            screenWidth={screenWidth}
          />
          <PopupAccountData
            isHeaderAccountHovered={isHeaderAccountHovered}
            handleClickLinkToAccount={clickLinkToAccount}
            handleClickButtonExit={clickButtonExit}
            setIsHeaderAccountHovered={setIsHeaderAccountHovered}
          />
          <DeletePlayerPopup
            isOpenPopup={isOpenDeletePlayerPopup}
            onClosePopup={closeAllPopup}
            isPopupSuccess={isPopupSuccess}
            goToHomePage={handleButtongoToHomePage}
            handleButtonClick={handleDeletePlayer}
          />
          <CancelQuestPopup
            isOpenPopup={isOpenCancelQuestPopup}
            onClosePopup={closeAllPopup}
            isPopupSuccess={isPopupSuccess}
            goToHomePage={handleButtongoToHomePage}
            handleButtonClick={handleCancelQuest}
          />
          <DeleteProfilePopup
            isOpenPopup={isOpenDeleteProfilePopup}
            onClosePopup={closeAllPopup}
            isPopupSuccess={isPopupSuccess}
            goToHomePage={handleButtongoToHomePage}
            handleButtonClick={handleDeleteProfile}
          />
          <PopupChangeQuestCategory
            isOpenPopup={isOpenPopupChangeQuestCategory}
            onClosePopup={closeAllPopup}
            isPopupSuccess={isPopupSuccess}
            goToHomePage={handleButtongoToHomePage}
            handleCancelAndGoBack={handleCancelAndGoBack}
            isOpenPopupChangeQuestCategory={isOpenPopupChangeQuestCategory}
            questCategories={questCategoriesToChange}
            sendCategory={changeCategoryInPopup}
          />
          <PopupAddPlayer
            isOpenPopup={isOpenPopopAddPlayer}
            onClosePopup={closeAllPopup}
            isPopupSuccess={isPopupSuccess}
            goToHomePage={handleButtongoToHomePage}
            isOpenPopopAddPlayer={isOpenPopopAddPlayer}
            sendDataForm={handleFormAddPlayer}
          />
          <PopupEditPlayer
            isOpenPopup={isOpenPopopEditPlayer}
            onClosePopup={closeAllPopup}
            isPopupSuccess={isPopupSuccess}
            goToHomePage={handleButtongoToHomePage}
            isOpenPopopEditPlayer={isOpenPopopEditPlayer}
            sendDataForm={handleFormEditPlayer}
            editedPlayer={editedPlayer}
          />
          <PopupResetPassword
            isOpenPopup={isOpenPopupResetPassword}
            onClosePopup={closeAllPopup}
            isPopupSuccess={isPopupSuccess}
            isOpenPopupResetPassword={isOpenPopupResetPassword}
          />
          <PopupChangePassword
            isOpenPopup={isOpenPopupChangePassword}
            onClosePopup={closeAllPopup}
            isPopupSuccess={isPopupSuccess}
            isOpenPopupChangePassword={isOpenPopupChangePassword}
            sendDataForm={handleFormChangePassword}
          />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
