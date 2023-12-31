import { useLocation } from 'react-router-dom';
import './ButtonElse.css'

function ButtonElse({ onClick }) {
  const location = useLocation();
  if (location.pathname !== '/saved-movies')
    return (
      <button className="movies-cards__button" type="button" onClick={onClick}>
        Ещё
      </button>
    )
}

export default ButtonElse;
