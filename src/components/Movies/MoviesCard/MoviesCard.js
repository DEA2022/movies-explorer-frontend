import "./MoviesCard.css";
import { useLocation, Link } from "react-router-dom";

function MoviesCard({movieId, cardId, image, duration, name, trailer, isSaved, onSave, onDeleteSavedCardMovie}) {
    const location = useLocation();

    function getMovieDuration(min) {
        return `${Math.floor(min / 60)}ч ${min % 60}м`;
    }

    function handleDeleteSavedCardMovie(cardId) {
        if (onDeleteSavedCardMovie) {
            onDeleteSavedCardMovie(cardId)
        }
    }

    function handleSave() {
        if (isSaved) {
            onDeleteSavedCardMovie(cardId)
        } else {
            onSave(movieId)
        }

    }

    return (
        <li className="movies-card">
            <Link to={trailer} target="_blank">
                <img className="movies-card__img" alt="Фото фильма" src={image}/>
            </Link>
            <div className="movies-card__info">
                <h2 className="movies-card__title">{name}</h2>
                <p className="movies-card__time">{getMovieDuration(duration)}</p>
            </div>
            {location.pathname === '/movies' && (
                <button
                    className={isSaved
                        ? 'movies-card__button-saved'
                        : 'movies-card__button'}
                    onClick={handleSave}
                    type="submit">
                    {isSaved ? '' : 'Сохранить'}
                </button>)}
            {location.pathname === '/saved-movies' && (
                <button
                    onClick={() => handleDeleteSavedCardMovie(cardId)}
                    className='movies-card__button-saved movies-card__button-saved_type_delete'
                    type="button">
                </button>)}
        </li>
    );
}

export default MoviesCard;
