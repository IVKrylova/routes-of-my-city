import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import LinkToAccount from '../LinkToAccount/LinkToAccount';
import './Header.scss';
import logoDesktop from '../../images/logo-desktop.svg';

const Header = (props) => {
  const [headerClass, setHeaderClass] = useState('header');
  const [headerLoginClass, setHeaderLoginClass] = useState('header-login');

  useEffect(() => {
    if (props.location.pathname === '/login') {
      props.screenWidth < 768 ? setHeaderClass('header header_hidden') : setHeaderClass('header');
      props.screenWidth < 768 ? setHeaderLoginClass('header-login') : setHeaderLoginClass('header-login header-login_hidden');
    }

    if (props.location.pathname !== '/login') {
      setHeaderLoginClass('header-login header-login_hidden');
    }
  }, [props.screenWidth, props.location]);

  return (
    <>
      <header className={headerLoginClass}>
        <Link to='/'>
          <img src={logoDesktop} alt='логотип Мой город' className='header-login__logo' />
        </Link>
      </header>
      <header className={headerClass}>
        <div className='header__burger-menu'>
          <button
            className='header__button-menu'
            aria-label='кнопка меню'
            type='button'
            onClick={props.handleClickBurgerMenu}
          ></button>
          <MobileMenu
            isMobileMenuOpen={props.isMobileMenuOpen}
            handleCloseMobileMenu={props.handleCloseMobileMenu}
            handleClickButtonLogin={props.handleClickButtonLogin}
            handleClickButtonSignUp={props.handleClickButtonSignUp}
            isLogin={props.isLogin}
            handleClickButtonExit={props.handleClickButtonExit}
          />
        </div>
        <Logo />
        <NavMenu
          scrollToBlock={props.scrollToBlock}
        />
        {!props.isLogin && props.location.pathname !== '/login' &&
          <>
            <Link
              className='header__button-account'
              to='/login'
              aria-label='ссылка на форму входа в личный кабинет'
            ></Link>
            <ul className='header__button-list'>
              <li>
                <Link className='header__button-sign-up' to='/signup'>
                  Регистрация
                </Link>
              </li>
              <li>
                <Link className='header__button-sign-in' to='/login'>
                  Вход
                </Link>
              </li>
            </ul>
          </>
        }
        {props.isLogin &&
          <div className='header__account'>
            <LinkToAccount
              handleClickLinkToAccount={props.handleClickLinkToAccount}
            />
            <button
              type='button'
              aria-label='кнопка показать данные об аккаунте'
              className='header__account-button'
              onMouseOver={props.handleHoverButtonHeaderAcount}
            ></button>
          </div>
        }
      </header>
    </>
  );
}

export default Header;
