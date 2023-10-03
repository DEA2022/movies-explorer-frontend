import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import React from 'react';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { paths } from '../../utils/constants'
import { initialCards as list } from '../../utils/constants'
function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [movies, setMovies] = React.useState(list)
  // пока нет api карточки сохраняются из массива
  const savedMovies = movies.filter((movie) => movie.saved)
  const onSave = (image) => {
    const updatedMovies = movies.map((e) => {
      if (e.image === image) {
        e.saved = true
      }
      return e
    })

    setMovies(updatedMovies)
  }

  return (
    <div className="page">
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path={paths.root.pathname} element={<Main />} />
        <Route path={paths.movies.pathname} element={<Movies onSave={onSave} movies={movies} />} />
        <Route path={paths.savedMovies.pathname} element={<SavedMovies movies={savedMovies} additionalClass={'movies-card-list_movies_saved'} />} />
        <Route path={paths.profile.pathname}
          element={<Profile
            successMessage={`При обновлении профиля произошла ошибка`}
            heading={`Привет, Виталий!`}
            additionalClass={`form-heading_type_account`}
            buttonText={`Сохранить`}
          />} />
        <Route path={paths.signup.pathname} element={<Register heading={`Добро пожаловать!`} textButton={'Зарегистрироваться'} />} />
        <Route path={paths.signin.pathname} element={<Login heading={`Рады видеть!`} textButton={'Войти'} additionalClass={'form-button_login'} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
