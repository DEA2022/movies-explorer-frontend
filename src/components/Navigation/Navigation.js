import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
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
            <li className='navigation__item'><NavLink className='navigation__link' to='/movies'>Фильмы</NavLink ></li>
            <li className='navigation__item'><NavLink className='navigation__link' to='/saved-movies'>Сохраненные фильмы</NavLink ></li>
          </ul>
          <NavLink className='navigation__account-link' to='/profile'>Аккаунт</NavLink >
        </>
      ) : (
        <>
          <div className='navigation__container navigation__container_logout'>
            <NavLink className='navigation__registration' to='/signup'>Регистрация</NavLink >
            <button className='navigation__enter'><NavLink className='navigation__enter-link' to='/signin'>Войти</NavLink ></button>
          </div>
        </>)
      }
      {isLoggedIn && renderBurger()}

    </nav>
  )
}

export default Navigation;