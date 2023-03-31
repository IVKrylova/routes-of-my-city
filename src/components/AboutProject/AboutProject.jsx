import iconFree from '../../images/icon-free-part.svg';
import photoParticipants from '../../images/happy-participant.png';
import './AboutProject.scss';

const AboutProject = () => {
  return (
    <section className='about-project'>
      <img src={iconFree} alt='Бесплатное участие' className='about-project__icon-free-part' />
      <h2 className='about-project__section-title'>О проекте</h2>
      <div className='about-project__description'>
        <p className='about-project__text'>
          «Мой Город» представляет собой креативную смесь городских экскурсий,
          квеста и других способов рассказать об истории города.
        </p>
        <p className='about-project__text'>
          Концепция проекта основана на применении современных технических средств
          краеведческого просвещения, а также использовании игровых и интерактивных
          методов, облегчающих освоение информации.
        </p>
      </div>
      <img src={photoParticipants} alt='Фото участников проекта' className='about-project__photo' />
    </section>
  );
}

export default AboutProject;
