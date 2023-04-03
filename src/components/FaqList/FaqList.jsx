import { useRef } from 'react';
import useScrollToRef from '../../hooks/useScrollToRef';
import Faq from '../Faq/Faq';
import logoRosmolodezh from '../../images/logo-rosmolodezh.svg';
import './FaqList.scss';

const FaqList = (props) => {
  let faqListElement = useRef(null);

  useScrollToRef(faqListElement);

  return (
    <section className='faq-list' id='#faq-list' ref={faqListElement}>
      <h2 className='faq-list__section-title'>Часто задаваемые вопросы</h2>
      <div className='faq-list__content'>
        <ul className='faq-list__list'>
          {props.faqList && props.faqList.map(el => {
            return (
              <Faq
                faq={el}
                key={el.id}
                sentFaq={props.handleOpenAnswer}
              />
            );
          })}
        </ul>
        <ul className='faq-list__list-partners'>
          <li>
            <img className='faq-list__partner' src={logoRosmolodezh} alt='логотип Росмолодежь' />
          </li>
          <li>
            <img className='faq-list__partner' src={logoRosmolodezh} alt='логотип Росмолодежь' />
          </li>
          <li>
            <img className='faq-list__partner' src={logoRosmolodezh} alt='логотип Росмолодежь' />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FaqList;
