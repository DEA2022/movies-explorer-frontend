import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <p className='portfolio__text'>Статичный сайт</p>
          <button className='portfolio__icon' />
        </li>
        <li className='portfolio__item'>
          <p className='portfolio__text'>Адаптивный сайт</p>
          <button className='portfolio__icon' />
        </li>
        <li className='portfolio__item'>
          <p className='portfolio__text portfolio__text_type_indent'>Одностраничное приложение</p>
          <button className='portfolio__icon' />
        </li>
      </ul>
    </section>

  )
}

export default Portfolio;