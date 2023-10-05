import SectionHeading from '../SectionHeading/SectionHeading';
import './Techs.css';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <SectionHeading heading='Технологии' aditionalClass='section-heading_section_techs' />
      <h3 className='techs__technology'>7 технологий</h3>
      <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='techs__items'>
        <li className='techs__item'>HTML</li>
        <li className='techs__item'>CSS</li>
        <li className='techs__item'>JS</li>
        <li className='techs__item'>React</li>
        <li className='techs__item'>Git</li>
        <li className='techs__item'>Express.js</li>
        <li className='techs__item'>mongoDB</li>
      </ul>
    </section>
  )
}

export default Techs;