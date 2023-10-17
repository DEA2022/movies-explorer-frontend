function clearStateMovies() {
    localStorage.removeItem("state_searchWord")
    localStorage.removeItem("state_isShortMovie")
    localStorage.removeItem("state_movies")
    localStorage.removeItem("state_allMovies")
    localStorage.removeItem("state_savedMovies")
    localStorage.removeItem("state_cardMovies")
    localStorage.removeItem("state_availableShowMore")
    localStorage.removeItem("state_errors")
}

export default clearStateMovies
