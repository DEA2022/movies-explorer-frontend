import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonElse from '../ButtonElse/ButtonElse';
import { apiMovies } from '../../../utils/MoviesApi';

function MoviesCardList(props) {
    const {
        isSavedMovies,
        additionalClass,
        movies,
        availableShowMore,
        handleShowMore,
        onSaveMovie,
        onDeleteSavedCardMovie
    } = props

    return (
        <section className='movies-cards' aria-label='Карточки фильмов'>
            <ul className={`movies-card-list ${additionalClass}`}>
                {
                    movies.map((movie) => {
                        const image = isSavedMovies ? movie.image : apiMovies.getBaseURL() + movie.image.url
                        return <MoviesCard
                            key={movie.id || movie.movieId}
                            onSave={() => onSaveMovie(movie)}
                            movieId={movie.id}
                            cardId={movie._id}
                            name={movie.nameRU} image={image} duration={movie.duration}
                            isSaved={movie.isSaved}
                            trailer={movie.trailerLink}
                            onDeleteSavedCardMovie={onDeleteSavedCardMovie}/>
                    })
                }
            </ul>
            {availableShowMore && <ButtonElse onClick={handleShowMore}/>}
        </section>
    )
}

export default MoviesCardList;
