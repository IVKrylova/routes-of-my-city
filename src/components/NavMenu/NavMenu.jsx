import { Link } from 'react-router-dom';
import './NavMenu.scss';

const NavMenu = (props) => {
  const classNavMenu = `navmenu ${props.isMobileMenuOpen ? 'navmenu_mobile' : ''}`;
  const classLink = `navmenu__link ${props.isMobileMenuOpen ? 'navmenu__link_mobile' : ''}`;
  const classList = `navmenu__list ${props.isMobileMenuOpen ? 'navmenu__list_mobile' : ''}`;

  return (
    <nav className={classNavMenu}>
      <ul className={classList}>
        {/* ToDo: add links to bloks.
        If <a> doesn`t work, you will need to install react-router-hash-link */}
        <li>
          <a className={classLink} href="#">О проекте</a>
        </li>
        <li>
          <a className={classLink} href="#">Квесты</a>
        </li>
        <li>
          <Link className={classLink} to='/rules'>Правила</Link>
        </li>
        <li>
          <a className={classLink} href="#">FAQ</a>
        </li>
        <li>
          <a className={classLink} href="#">Контакты</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
