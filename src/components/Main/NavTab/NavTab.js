import './NavTab.css';
import { HashLink } from 'react-router-hash-link'


function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__item">
          <HashLink smooth to="/#about-project" className="nav-tab__link">О проекте</HashLink>
        </li>
        <li className="nav-tab__item">
          <HashLink smooth to="/#techs" className="nav-tab__link">Технологии</HashLink>
        </li>
        <li className="nav-tab__item">
          <HashLink smooth to="/#about-me" className="nav-tab__link">Студент</HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;




