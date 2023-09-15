import './AboutProject.css';
import SectionHeading from '../SectionHeading/SectionHeading';

function AboutProject() {
  return (
    <section className='about-project'>
      <SectionHeading heading='О проекте' />
      <ul className="about-project__info">
        <li className="about-project__item">
          <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__content'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности
            и финальные доработки.
          </p>
        </li>
        <li className="about-project__item">
          <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__content'>
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="about-project__distribution">
        <li className="about-project__element about-project__element_size_s">
          <h3 className='about-project__heading about-project__heading_color_green'>1 неделя</h3>
          <p className='about-project__text'>
            Back-end
          </p>
        </li>
        <li className="about-project__element about-project__element_size_l">
          <h3 className='about-project__heading about-project__heading_color_grey'>4 недели</h3>
          <p className='about-project__text'>
            Front-end
          </p>
        </li>
      </ul>
    </section>
  )
}

export default AboutProject;