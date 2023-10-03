import { Link } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu({ onClose }) {

  return (
    <div className='burger-menu'>
      <div className='burger-menu__container'>
        <ul className='burger-menu__list'>
          <li className='burger-menu__item'><Link className='burger-menu__link' to='/'>Главная</Link></li>
          <li className='burger-menu__item'><Link className='burger-menu__link' to='/movies'>Фильмы</Link></li>
          <li className='burger-menu__item'><Link className='burger-menu__link' to='/saved-movies'>Сохранённые фильмы</Link></li>
        </ul>
        <button className='burger-menu__account' type='button'>
          <Link className='burger-menu__account-link' to='/profile'>Аккаунт</Link>
        </button>
        <button className='burger-menu__close' type='button' onClick={onClose} />
      </div>
    </div>
  )
}

export default BurgerMenu;