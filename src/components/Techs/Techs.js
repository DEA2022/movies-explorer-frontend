import SectionHeading from '../SectionHeading/SectionHeading';
import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <SectionHeading heading='Технологии' aditionalClass='section__heading_section_techs' />
      <h3 className='techs__technology'>7 технологий</h3>
      <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='techs__buttons'>
        <li className='techs__item'>
          <button className='techs__button'>HTML</button>
        </li>
        <li className='techs__item'>
          <button className='techs__button'>CSS</button>
        </li>
        <li className='techs__item'>
          <button className='techs__button'>JS</button>
        </li>
        <li className='techs__item'>
          <button className='techs__button'>React</button>
        </li>
        <li className='techs__item'>
          <button className='techs__button'>Git</button>
        </li>
        <li className='techs__item'>
          <button className='techs__button'>Express.js</button>
        </li>
        <li className='techs__item'>
          <button className='techs__button'>mongoDB</button>
        </li>
      </ul>
    </section>
  )
}

export default Techs;