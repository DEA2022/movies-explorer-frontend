import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navigation({ isLoggedIn }) {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false)

  React.useEffect(() => { setIsBurgerMenuOpen(false) }, [isLoggedIn])
  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen)
  }

  function renderBurger() {
    return isBurgerMenuOpen
      ? <BurgerMenu onClose={() => setIsBurgerMenuOpen(false)} />
      : <button className='navigation__burger-button' onClick={handleBurgerMenuClick} />
  }

  return (
    <nav className={`navigation`}>
      <Logo />
      {isLoggedIn ? (
        <>
          <ul className={`navigation__container ${isBurgerMenuOpen && 'burger-menu_opened'}  navigation__container_type_auth`}>
            <li className='navigation__item'><Link className='navigation__link' to='/movies'>Фильмы</Link></li>
            <li className='navigation__item'><Link className='navigation__link' to='/saved-movies'>Сохраненные фильмы</Link></li>
          </ul>
          <button className='navigation__account' type='button'>
            <Link className='navigation__account-link' to='/profile'>Аккаунт</Link>
          </button>
        </>
      ) : (
        <>
          <div className='navigation__container'>
            <Link className='navigation__registration' to='/signup'>Регистрация</Link>
            <button className='navigation__enter'><Link className='navigation__enter-link' to='/signin'>Войти</Link></button>
          </div>
        </>)
      }
      {isLoggedIn && renderBurger()}

    </nav>
  )
}

export default Navigation;