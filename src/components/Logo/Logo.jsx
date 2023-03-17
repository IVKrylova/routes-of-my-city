import { Link } from 'react-router-dom';
import logoMobile from '../../images/logo-mobile.svg';
import logoDesktop from '../../images/logo-desktop.svg';
import './Logo.scss';

const Logo = () => {
  return (
    <Link to='/' className='logo'>
      <img src={logoMobile} alt='логотип Мой город' className='logo__mobile' />
      <img src={logoDesktop} alt='логотип Мой город' className='logo__desktop' />
    </Link>
  );
}

export default Logo;
