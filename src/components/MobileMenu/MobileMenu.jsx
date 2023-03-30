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
      />
      <ul className='mobile-menu__button-list'>
        <li>
          <button type='button' className='mobile-menu__button-sign-in'>Войти</button>
        </li>
        <li>
          <button type='button' className='mobile-menu__button-sign-up'>Зарегестрироваться</button>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
