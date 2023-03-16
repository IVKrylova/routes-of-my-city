import MobileMenu from '../MobileMenu/MobileMenu';
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__burger-menu'>
        <button className='header__button-menu' aria-label='кнопка меню' type='button'></button>
        <MobileMenu />
      </div>
      <Logo />
      <NavMenu />
      <button className='header__button-account' aria-label='кнопка личный кабинет' type='button'></button>
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
    </header>
  );
}

export default Header;
