import { useEffect, useState } from "react"
import { apiMovies } from "../utils/MoviesApi"
import getCardsInfoBySize from "../utils/getCardInfoBySize"
import setStateMovesByName from '../utils/setStateMovesByName';
import { mainApi } from '../utils/MainApi';
import getToken from '../utils/getToken';
import saveStateToLocalStorage from "../utils/setStateMovesByName";


function useSearchMovies(initState) {
  const [searchWord, setSearchWord] = useState(initState.searchWord || "")
  const [isShortMovie, setIsShortMove] = useState(initState.isShortMovie || false)
  const [allMovies, setAllMovies] = useState(initState.allMovies || [])
  const [movies, setMovies] = useState(initState.movies || [])
  const [cardMovies, setCardMovies] = useState(initState.cardMovies || [])
  const [availableShowMore, setAvailableShowMore] = useState(initState.availableShowMore || false)
  const [errors, setErrors] = useState(initState.errors || { searchWord: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [savedMovies, setSavedMovies] = useState([])

  useEffect(() => {
    setIsLoading(true)
    mainApi.getMovies(getToken())
      .then((movies) => {
        process(movies)
      })
      .catch((message) => setErrors({ ...errors, serverMessage: message }))
      .finally(() => setIsLoading(false))
  }, [])

  const word = searchWord.toLowerCase()

  function handleChangeSearchWord(evt) {
    setErrors({ searchWord: "", movies: "" })
    setStateMovesByName("errors", { searchWord: "", movies: "" })
    setSearchWord(evt.target.value);
    setStateMovesByName("searchWord", evt.target.value)
  }

  function handleSearchMovies(isShortMovie) {
    setIsShortMove(isShortMovie)
    setStateMovesByName("isShortMovie", !!isShortMovie)
    if (searchWord.trim().length === 0) {
      setErrors({ ...errors, searchWord: "Нужно ввести ключевое слово" })
      return
    }
    debugger
    if (allMovies.length > 0) {
      applyFilter(allMovies)
      saveStateToLocalStorage("allMovies", allMovies)
    } else {
      setIsLoading(true)
      apiMovies.getAllMovies()
        .then((sourceMovies) => {
          setAllMovies(sourceMovies)
          applyFilter(sourceMovies)
        })
        .catch((message) => setErrors({ ...errors, serverMessage: message }))
        .finally(() => setIsLoading(false))
    }
  }

  function applyFilter(sourceMovies) {
    if (searchWord.trim()) {
      const filteredMovies = sourceMovies.filter((film) => {
        if (film.nameRU.toLowerCase().includes(word) || film.nameEN.toLowerCase().includes(word)) {
          return isShortMovie ? film.duration <= 40 : true
        } else {
          return false
        }
      })

      const updatedErrors = { ...errors, movies: !filteredMovies.length ? "Ничего не найдено" : "" }
      setErrors(updatedErrors)
      setStateMovesByName("errors", updatedErrors)
      if (filteredMovies.length > 0) {
        const updatedMovies = filteredMovies.slice(0, getCardsInfoBySize(window.innerWidth).initCards)
        setAvailableShowMore(filteredMovies > updatedMovies)
        setStateMovesByName("availableShowMore", filteredMovies > updatedMovies)
        setMovies(filteredMovies)
        setStateMovesByName("movies", filteredMovies)

        process(savedMovies, updatedMovies)
      }

      setIsLoading(false)
    }
  }

  function handleShowMore() {
    const { newCards } = getCardsInfoBySize(window.innerWidth);
    let count = cardMovies.length + newCards;

    // Если у нас отображается не полное кол-во карточек в ряду, то мы их дополняем до цельных рядов.
    // В случае если мы добавили карточки на экране > 1280, а потом перешли на 768.
    if (count % newCards !== 0) {
      count += newCards - count % newCards
    }

    const updatedMovies = movies.slice(0, count)
    setAvailableShowMore(movies.length > updatedMovies.length)
    setStateMovesByName("availableShowMore", movies.length > updatedMovies.length)
    setCardMovies(updatedMovies)
    setStateMovesByName("cardMovies", updatedMovies)
  }

  function handleSaveMove(movie) {
    const movieData = {
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: apiMovies.getBaseURL() + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: apiMovies.getBaseURL() + movie.image.formats.thumbnail.url,
    }
    mainApi.addSaveMovie(getToken(), movieData)
      .then((movie) => {
        process(savedMovies.concat(movie))
      })
      .catch((message) => setErrors({ ...errors, movies: message }))
  }

  function handleDeleteSavedMovie(id) {
    mainApi.deleteMovie(getToken(), id)
      .then(() => {
        process(savedMovies.filter((sm) => sm._id !== id))
      })
      .catch((message) => setErrors({ ...errors, serverMessage: message }))
  }

  function process(savedMovies, cm = cardMovies) {
    setSavedMovies(savedMovies)
    const updatedCardMovies = cm.map((movie) => {
      const findMovie = savedMovies.find((sm) => sm.movieId === movie.id)
      if (findMovie) {
        return {
          ...movie,
          _id: findMovie._id,
          isSaved: true,
        }
      }

      const { _id, isSaved, ...rest } = movie
      return rest
    })
    setCardMovies(updatedCardMovies)
    setStateMovesByName("cardMovies", updatedCardMovies)
  }

  return {
    handleSearchMovies,
    handleChangeSearchWord,
    handleShowMore,
    handleSaveMove,
    handleDeleteSavedMovie,
    availableShowMore,
    isLoading,
    movies: cardMovies,
    errors,
    searchWord,
    isShortMovie
  }
}

export default useSearchMovies
