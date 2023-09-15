import './NavTab.css';

function NavTab() {
  return (
    <nav className="nav-tab__nav">
      <ul className="nav-tab__list">
        <li className="nav-tab__item">
          <button className="nav-tab__button">О проекте</button>
        </li>
        <li className="nav-tab__item">
          <button className="nav-tab__button">Технологии</button>
        </li>
        <li className="nav-tab__item">
          <button className="nav-tab__button">Студент</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;




