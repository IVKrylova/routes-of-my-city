import { useRef, useEffect } from 'react';

import NavMenu from '../NavMenu/NavMenu';
import ButtonClose from '../ButtonClose/ButtonClose';

import './MobileMenu.scss';

const MobileMenu = (props) => {
  const menu = useRef();

  const handleClickOutside = (evt) => {
    if (menu.current && !menu.current.contains(evt.target)) {
      props.handleCloseMobileMenu(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div
      className={`mobile-menu ${props.isMobileMenuOpen ? 'mobile-menu_visible' : ''}`}
      ref={menu}
    >
      <ButtonClose
        handleClose={props.handleCloseMobileMenu}
      />
      <NavMenu
        isMobileMenuOpen={props.isMobileMenuOpen}
        handleClose={props.handleCloseMobileMenu}
      />
      {!props.isLogin &&
        <ul className='mobile-menu__button-list'>
          <li>
            <button
              type='button'
              className='mobile-menu__button-sign-in'
              onClick={props.handleClickButtonLogin}
            >
              Войти
            </button>
          </li>
          <li>
            <button
              type='button'
              className='mobile-menu__button-sign-up'
              onClick={props.handleClickButtonSignUp}
            >
              Зарегестрироваться
            </button>
          </li>
        </ul>
      }
      {props.isLogin &&
        <button
          type='button'
          className='mobile-menu__button-exit'
          onClick={props.handleClickButtonExit}
        >
          Выйти
        </button>
      }
    </div>
  );
}

export default MobileMenu;
