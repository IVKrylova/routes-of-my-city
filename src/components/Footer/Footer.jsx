import { useRef, useState } from 'react';
import useScrollToRef from '../../hooks/useScrollToRef';
import Logo from '../Logo/Logo';
import logoVk from '../../images/logo-vk.svg';
import logoTg from '../../images/logo-tg.svg';
import './Footer.scss';
import { useEffect } from 'react';

const Footer = (props) => {
  let footerElement = useRef(null);
  const [footerClass, setFooterClass] = useState('footer');

  useScrollToRef(footerElement);

  useEffect(() => {
    if (props.location.pathname === '/login') {
      props.screenWidth < 768 ? setFooterClass('footer footer_hidden') : setFooterClass('footer');
    } else {
      setFooterClass('footer');
    }

  }, [props.screenWidth, props.location]);

  useEffect(() => {
    if (props.location.pathname === '/login') {
      props.screenWidth < 768 ? setFooterClass('footer footer_hidden') : setFooterClass('footer');
    } else {
      setFooterClass('footer');
    }
  }, []);

  return (
    !props.isPageNotFound &&
      <footer className={footerClass} id='#contacts' ref={footerElement}>
        <Logo />
        <div className='footer__about-company'>
          <p className='footer__company-name'>АНО «АМПИР»</p>
          <ul className='footer__contacts-list'>
            <li>
              <a className='footer__link-to-contact' href='tel:+79197529669'>+7 919 752-96-69</a>
            </li>
            <li>
              <a className='footer__link-to-contact' href='mailto:anostav@yandex.ru'>anostav@yandex.ru</a>
            </li>
          </ul>
        </div>
        <ul className='footer__social-networks-list'>
          <li>
            <a className='footer__link-to-network' href='https://vk.com/mg_stv' target='__blanck'>
              <img src={logoVk} alt='логотип ВКонтакте' className='footer__logo-network' />
            </a>
          </li>
          <li>
            <a className='footer__link-to-network' href='https://t.me/mg_stv' target='__blanck'>
              <img src={logoTg} alt='логотип Телеграм' className='footer__logo-network' />
            </a>
          </li>
        </ul>
      </footer>
  );
}

export default Footer;
