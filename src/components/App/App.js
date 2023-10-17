import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import React from 'react';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { paths } from '../../utils/constants'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { mainApi } from '../../utils/MainApi'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import clearStateMovies from '../../utils/clearStateMovies';
import getToken from '../../utils/getToken';
import errors from '../../utils/errors';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(!!getToken());
  const [currentUser, setCurrentUser] = React.useState({});
  const navigate = useNavigate();

  React.useEffect(() => {
    handleTokenCheck();
  }, [])

  function handleRegisterSubmit(name, email, password) {
    return mainApi.register(name, email, password)
      .then(data => {
        if (data) {
          setIsLoggedIn(true);
          navigate('/movies');
          handleLoginSubmit(data.email, password)
        }
      })
      .catch(err => {
        return Promise.reject(errors(err));
      })
  }

  function handleLoginSubmit(email, password) {
    return mainApi.authorization(email, password)
      .then(data => {
        if (data.token) {
          setIsLoggedIn(true);
          localStorage.setItem('jwt', data.token);

          handleTokenCheck();
          navigate('/movies');
        }
      })
      .catch((err) => {
        return Promise.reject(errors(err));
      })
  }

  function handleTokenCheck() {
    const token = getToken()
    if (token) {
      mainApi.getUserInfo(token)
        .then((userInfo) => {
          if (userInfo) {
            setIsLoggedIn(true);
            setCurrentUser(userInfo);
          }
        })
        .catch((errorMessage) => {
          setIsLoggedIn(false);
          console.error(`Верификация токена не выполнена ${errorMessage}`)
        })
    }
  }

  function loggedOut() {
    localStorage.removeItem('jwt');
    clearStateMovies();
    setIsLoggedIn(false);
    navigate("/");
  }

  function handleUpdateUser(userInfo) {
    return mainApi.setUserInfo(userInfo, localStorage.getItem('jwt'))
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(err => {
        return Promise.reject(errors(err));
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path={paths.movies.pathname} element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              element={Movies}
            />}
          />
          <Route path={paths.savedMovies.pathname} element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              element={SavedMovies}
              additionalClass={'movies-card-list_movies_saved'}
            />}
          />
          <Route path={paths.profile.pathname} element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              element={Profile}
              heading={`Привет,`}
              successMessage={`При обновлении профиля произошла ошибка`}
              additionalClass={`form-heading_type_account`}
              buttonText={`Сохранить`}
              loggedOut={loggedOut}
              onUpdate={handleUpdateUser}
            />}
          />
          <Route path={paths.root.pathname} element={<Main />} />
          <Route path={paths.signup.pathname} element={
            <Register
              heading={`Добро пожаловать!`}
              textButton={'Зарегистрироваться'}
              onRegister={handleRegisterSubmit} />}
          />
          <Route
            path={paths.signin.pathname}
            element={<Login
              heading={`Рады видеть!`}
              textButton={'Войти'}
              onLogin={handleLoginSubmit} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
