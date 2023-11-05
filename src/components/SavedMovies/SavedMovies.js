import './SavedMovies.css';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import useSavedSearchMovies from '../../hooks/useSavedSearchMovies';
import Preloader from '../Preloader/Preloader';
import React from 'react';


function SavedMovies({additionalClass}) {
    const {
        searchWord,
        movies,
        isLoading,
        isShortMovie,
        errors,
        handleDeleteSavedMovie,
        handleChangeSearchWord,
        handleSearchMovies
    } = useSavedSearchMovies()
    return (
        <section className='saved-movies' aria-label='Сохраненные фильмы'>
            <SearchForm
                value={searchWord}
                onChange={handleChangeSearchWord}
                onSearch={handleSearchMovies}
                errorMessage={errors.searchWord}
                isShortMovie={isShortMovie}
            />
            {isLoading
                ? <Preloader/>
                : errors.movies
                    ? <span style={{color: "red"}}>{errors.movies}</span>
                    : <MoviesCardList
                        isSavedMovies
                        movies={movies}
                        additionalClass={additionalClass}
                        onDeleteSavedCardMovie={handleDeleteSavedMovie}/>
            }
        </section>
    )
}

export default SavedMovies;
