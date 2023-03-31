import Logo from '../Logo/Logo';
import logoVk from '../../images/logo-vk.svg';
import logoTg from '../../images/logo-tg.svg';
import './Footer.scss';

const Footer = (props) => {
  return (
    !props.isPageNotFound &&
      <footer className='footer'>
        <Logo />
        <div className='footer__about-company'>
          <p className='footer__company-name'>АНО «АМПИР»</p>
          {/* ToDo: check contacts */}
          <ul className='footer__contacts-list'>
            <li>
              <a className='footer__link-to-contact' href='tel:+79000000000'>+7 900 000-00-00</a>
            </li>
            <li>
              <a className='footer__link-to-contact' href='mailto:memail@mail.com'>memail@mail.com</a>
            </li>
          </ul>
        </div>
        {/* ToDo: add links to networks */}
        <ul className='footer__social-networks-list'>
          <li>
            <a className='footer__link-to-network' href='' target='__blanck'>
              <img src={logoVk} alt='логотип ВКонтакте' className='footer__logo-network' />
            </a>
          </li>
          <li>
            <a className='footer__link-to-network' href='' target='__blanck'>
              <img src={logoTg} alt='логотип Телеграм' className='footer__logo-network' />
            </a>
          </li>
        </ul>
      </footer>
  );
}

export default Footer;
