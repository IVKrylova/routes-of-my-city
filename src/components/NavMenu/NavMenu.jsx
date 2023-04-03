import { Link } from 'react-router-dom';
import './NavMenu.scss';

const NavMenu = (props) => {
  const classNavMenu = `navmenu ${props.isMobileMenuOpen ? 'navmenu_mobile' : ''}`;
  const classLink = `navmenu__link ${props.isMobileMenuOpen ? 'navmenu__link_mobile' : ''}`;
  const classList = `navmenu__list ${props.isMobileMenuOpen ? 'navmenu__list_mobile' : ''}`;

  return (
    <nav className={classNavMenu}>
      <ul className={classList}>
        <li>
          <Link className={classLink} to="/#about-project">
            О проекте
          </Link>
        </li>
        <li>
          <Link className={classLink} to="/#main-quests">
            Квесты
          </Link>
        </li>
        <li>
          <Link className={classLink} to='/rules'>
            Правила
          </Link>
        </li>
        <li>
          <Link className={classLink} to="/#faq-list">
            FAQ
          </Link>
        </li>
        <li>
          <Link className={classLink} to="#contacts">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
