import { useEffect, useState } from 'react';
import { mainApi } from '../utils/MainApi';
import getToken from '../utils/getToken';

function useSavedSearchMovies() {
    const [searchWord, setSearchWord] = useState("")
    const [isShortMovie, setIsShortMove] = useState(false)
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({ searchWord: "", serverMessage: "" })
    const word = searchWord.toLowerCase()

    useEffect(() => {
        setIsLoading(true)
        mainApi.getMovies(getToken())
            .then((data) => {
                setMovies(data)
            })
            .catch((message) => setErrors({ ...errors, serverMessage: message }))
            .finally(() => setIsLoading(false))
    }, [])

    function handleDeleteSavedMovie(id) {
        mainApi.deleteMovie(getToken(), id)
            .then(() => {
                setMovies(movies.filter((movie) => movie._id !== id))

            })
            .catch((message) => setErrors({ ...errors, serverMessage: message }))
    }

    function handleChangeSearchWord(evt) {
        setErrors({ searchWord: "", movies: "" })
        setSearchWord(evt.target.value);
    }

    function handleSearchMovies(isShortMovie) {
        setIsShortMove(isShortMovie)
        setIsLoading(true)
        mainApi.getMovies(getToken())
            .then((data) => {
                const filteredMovies = data.filter((film) => {
                    if (film.nameRU.toLowerCase().includes(word) || film.nameEN.toLowerCase().includes(word)) {
                        return isShortMovie ? film.duration <= 40 : true
                    } else {
                        return false
                    }
                })
                setErrors({ ...errors, movies: !filteredMovies.length ? "Ничего не найдено" : "" })
                setMovies(filteredMovies)
            })
            .finally(() => setIsLoading(false))
    }

    return {
        searchWord,
        isShortMovie,
        movies,
        errors,
        isLoading,
        handleDeleteSavedMovie,
        handleChangeSearchWord,
        handleSearchMovies,
    }
}

export default useSavedSearchMovies
