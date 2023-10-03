import './AboutMe.css';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Link } from 'react-router-dom';
import photo from '../../../images/photo.png'

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <SectionHeading heading='Студент' aditionalClass='section-heading_section_about-me' />
      <div className='about-me__info'>
        <div className='about-me__main-info'>
          <p className='about-me__name'>Виталий</p>
          <p className='about-me__job'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__description'>
            Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ.
            У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом.
            Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
            После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами
            и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <Link
            to={'https://github.com/DEA2022/'}
            className='about-me__link'
            target='_blank'
            rel='nofollow noreferrer'
          >
            Github
          </Link>
        </div>
        <img className='about-me__photo' alt='мое фото' src={photo} />
      </div>
    </section>
  )
}

export default AboutMe;