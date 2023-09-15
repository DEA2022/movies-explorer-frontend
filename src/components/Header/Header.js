import './Header.css';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className='header page__header'>
      <Logo />
      <div className='header__nav'>
        <a className='header__registration' href="#">Регистрация</a>
        <button className='header__enter'>Войти</button>
      </div>
    </header>
  )
}

export default Header;