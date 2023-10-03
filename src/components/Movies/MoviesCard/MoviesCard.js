import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ image, duration, name, onSave, isSaved }) {
  const location = useLocation();


  return (
    <li className="movies-card">
      <img className="movies-card__img" alt="Фото фильма" src={image} />
      <div className="movies-card__info">
        <h2 className="movies-card__title">{name}</h2>
        <p className="movies-card__time">{duration}</p>
      </div>
      {location.pathname === '/movies' && (
        <button
          className={isSaved
            ? 'movies-card__button-saved'
            : 'movies-card__button'}
          onClick={() => onSave(image)}
          type="submit">
          {isSaved ? '' : 'Сохранить'}
        </button>)}
      {location.pathname === '/saved-movies' && (
        <button
          className='movies-card__button-saved movies-card__button-saved_type_delete'
          type="button">
        </button>)}
    </li>
  );
}

export default MoviesCard;