import Faq from '../Faq/Faq';
import logoRosmolodezh from '../../images/logo-rosmolodezh.svg';
import './FaqList.scss';

const FaqList = (props) => {
  return (
    <section className='faq-list'>
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
