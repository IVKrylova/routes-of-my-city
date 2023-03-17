import './Benefits.scss';
import { benefits } from '../../utils/data/benefits';

const Benefits = () => {
  return (
    <section className='benefits' aria-label='преимущества участия в квесте'>
      <ul className='benefits__list'>
        {benefits.map(benefit => {
          return (
            <li className='benefits__item' key={benefit.id}>
              <img src={benefit.icon} alt={`иконка ${benefit.title}`} className='benefits__icon' />
              <h3 className='benefits__title'>{benefit.title}</h3>
              <p className='benefits__text'>{benefit.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Benefits;
