import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <Link
            to={'https://github.com/DEA2022/how-to-learn'}
            className='portfolio__link'
            target='_blank'
            rel='nofollow noreferrer'>
            <p className='portfolio__text'>Статичный сайт</p>
            <button className='portfolio__icon' />
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link
            to={'https://github.com/DEA2022/russian-travel'}
            className='portfolio__link'
            target='_blank'
            rel='nofollow noreferrer'>
            <p className='portfolio__text'>Адаптивный сайт</p>
            <button className='portfolio__icon' />
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link
            to={'https://github.com/DEA2022/react-mesto-api-full-gha'}
            className='portfolio__link'
            target='_blank'
            rel='nofollow noreferrer'>
            <p className='portfolio__text portfolio__text_type_indent'>Одностраничное приложение</p>
            <button className='portfolio__icon portfolio__icon_type_last' />
          </Link>
        </li>
      </ul>
    </section>

  )
}

export default Portfolio;