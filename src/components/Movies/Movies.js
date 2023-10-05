import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';


function Movies({ movies, onSave, additionalClass }) {
  return (
    <section className='movies' aria-label='Фильмы'>
      <SearchForm />
      <MoviesCardList movies={movies} onSave={onSave} additionalClass={additionalClass} />
    </section>
  )
}

export default Movies;