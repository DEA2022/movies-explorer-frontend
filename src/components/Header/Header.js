import './Header.css';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import { paths } from '../../utils/constants'

function Header({ isLoggedIn }) {
  const location = useLocation();


  if (Object.values(paths).some((path) => path.pathname === location.pathname && path.showHeader === true)) {
    return (
      <header className='header page__header'>
        <Navigation isLoggedIn={isLoggedIn} />
      </header>
    )
  }

  return
}

export default Header;