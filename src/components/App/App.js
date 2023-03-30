import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import PopupAccountData from '../PopupAccountData/PopupAccountData';
import useWindowWidth from '../../hooks/useWindowWidth';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import './App.scss';
import { INITIAL_STATE_TEAM } from '../../utils/constants';
// ToDo: delete after getting API data
import { faq } from '../../utils/data/faq';
import { teams } from '../../utils/data/teams';

function App() {
  let navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isHeaderAccountHovered, setIsHeaderAccountHovered] = useState(false);
  const [faqList, setFaqList] = useState([]);
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
