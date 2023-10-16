function getMoviesState() {
    const searchWord = localStorage.getItem("state_searchWord")
    const isShortMovie = localStorage.getItem("state_isShortMovie")
    const movies = localStorage.getItem("state_movies")
    const cardMovies = localStorage.getItem("state_cardMovies")
    const availableShowMore = localStorage.getItem("state_availableShowMore")
    const errors = localStorage.getItem("state_errors")

    return {
        searchWord: searchWord ? JSON.parse(searchWord) : "",
        isShortMovie: isShortMovie ? JSON.parse(isShortMovie) : false,
        movies: isShortMovie ? JSON.parse(movies) : "",
        cardMovies: cardMovies ? JSON.parse(cardMovies) : "",
        availableShowMore: availableShowMore ? JSON.parse(availableShowMore) : "",
        errors: errors ? JSON.parse(errors) : {},
    }
}

export default getMoviesState
