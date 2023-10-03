import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Navigation({ isLoggedIn }) {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false)

  React.useEffect(() => { setIsBurgerMenuOpen(false) }, [isLoggedIn])
  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen)
  }

  function closeMenu() {
    setIsBurgerMenuOpen(false)
  }

  function renderBurger() {
    return isBurgerMenuOpen
      ? <div className='header__burger-close' onClick={closeMenu} />
      : <button className='header__burger' onClick={handleBurgerMenuClick}>
        <div className='header__burger-button' />
      </button>
  }

  return (
    <nav className={`navigation ${isBurgerMenuOpen && 'header_opened'}`}>
      <Logo />
      {isLoggedIn && renderBurger ? (
        <>
          <ul className='navigation__container navigation__container_type_auth'>
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
      {/* {isLoggedIn && renderBurger} */}

    </nav>
  )
}

export default Navigation;