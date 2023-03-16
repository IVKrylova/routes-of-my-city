import './NavMenu.scss';

const NavMenu = () => {
  return (
    <nav className='navmenu'>
      <ul className='navmenu__list'>
        {/* ToDo: add links to bloks.
        If <a> doesn`t work, you will need to install react-router-hash-link */}
        <li>
          <a className='navmenu__link' href="#">О проекте</a>
        </li>
        <li>
          <a className='navmenu__link' href="#">Квесты</a>
        </li>
        <li>
          <a className='navmenu__link' href="#">Правила</a>
        </li>
        <li>
          <a className='navmenu__link' href="#">FAQ</a>
        </li>
        <li>
          <a className='navmenu__link' href="#">Контакты</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
