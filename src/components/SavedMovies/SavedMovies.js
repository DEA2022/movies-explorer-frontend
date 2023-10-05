import './SavedMovies.css';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';


function SavedMovies({ movies, additionalClass }) {
  return (
    <section className='saved-movies' aria-label='Сохраненные фильмы'>
      <SearchForm />
      <MoviesCardList movies={movies} additionalClass={additionalClass} />
    </section>
  )
}

export default SavedMovies;