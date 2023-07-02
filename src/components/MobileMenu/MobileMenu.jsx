import './MobileMenu.scss';
import NavMenu from '../NavMenu/NavMenu';
import ButtonClose from '../ButtonClose/ButtonClose';

const MobileMenu = (props) => {
  return (
    <div className={`mobile-menu ${props.isMobileMenuOpen ? 'mobile-menu_visible' : ''}`}>
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
