import React from 'react';
import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader'
import useSearchMovies from '../../hooks/useSearchMovies';
import getStateMovies from '../../utils/getStateMovies';

function Movies({ additionalClass }) {
    const {
        searchWord,
        isShortMovie,
        isLoading,
        movies,
        availableShowMore,
        errors,
        handleSearchMovies,
        handleChangeSearchWord,
        handleShowMore,
        handleSaveMove,
        handleDeleteSavedMovie
    } = useSearchMovies(getStateMovies())



    return (
        <section className='movies' aria-label='Фильмы'>
            <SearchForm
                value={searchWord}
                onChange={handleChangeSearchWord}
                onSearch={handleSearchMovies}
                errorMessage={errors.searchWord}
                isShortMovie={isShortMovie}
                disabled={!searchWord.trim()}
            />
            {isLoading
                ? <Preloader />
                : errors.movies
                    ? <span style={{ color: "red" }}>{errors.movies}</span>
                    : <MoviesCardList
                        movies={movies}
                        onDeleteSavedCardMovie={handleDeleteSavedMovie}
                        additionalClass={additionalClass}
                        availableShowMore={availableShowMore}
                        handleShowMore={handleShowMore}
                        onSaveMovie={handleSaveMove}
                    />
            }
        </section>
    )
}

export default Movies;
