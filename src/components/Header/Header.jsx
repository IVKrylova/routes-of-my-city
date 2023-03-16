import { Link } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import LinkToAccount from '../LinkToAccount/LinkToAccount';
import './Header.scss';

const Header = (props) => {
  return (
    <header className='header'>
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
        />
      </div>
      <Logo />
      <NavMenu
        isMobileMenuOpen={props.isMobileMenuOpen}
      />
      {!props.isLogin &&
        <>
          {/* ToDo: set up routing */}
          <Link
            className='header__button-account'
            to='/'
            aria-label='ссылка на форму входа в личный кабинет'
          ></Link>
          <ul className='header__button-list'>
            <li>
              <button className='header__button-sign-up' type='button'>
                Регистрация
              </button>
            </li>
            <li>
              <button className='header__button-sign-in' type='button'>
                Вход
              </button>
            </li>
          </ul>
        </>
      }
      {props.isLogin &&
        <div className='header__account'>
          <LinkToAccount />
          <button
            type='button'
            aria-label='кнопка показать данные об аккаунте'
            className='header__account-button'
          ></button>
        </div>
      }
    </header>
  );
}

export default Header;
