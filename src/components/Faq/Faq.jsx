import { faq } from '../../utils/data/faq';
import logoRosmolodezh from '../../images/logo-rosmolodezh.svg';
import './Faq.scss';

const Faq = (props) => {
  return (
    <section className='faq'>
      <h2 className='section-title'>Часто задаваемые вопросы</h2>
      <div className='faq__content'>
        <ul className='faq__list'>
          {/* ToDo: replace with API data */}
          {faq.map(el => {
            return (
              <li className='faq__item' key={el.id}>
                <button
                  className='faq__button'
                  type='button'
                  aria-label='кнопка скрыть/показать ответ'
                ></button>
                <p className='faq__question'>{el.question}</p>
                <p className='faq__answer'>{el.answer}</p>
              </li>
            );
          })}
        </ul>
        <ul className='faq__list-partners'>
          <li className='faq__partner'>
            <img src={logoRosmolodezh} alt='логотип Росмолодежь' />
          </li>
          <li className='faq__partner'>
            <img src={logoRosmolodezh} alt='логотип Росмолодежь' />
          </li>
          <li className='faq__partner'>
            <img src={logoRosmolodezh} alt='логотип Росмолодежь' />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Faq;
