function errors(err) {
  if (err.status === 400) {
    return `${err.status}. Не верно заполнено одно из полей`;
  } else if (err.status === 401) {
    return `${err.status}. Вы ввели неправильный логин или пароль`;
  } else if (err.status === 403) {
    return `${err.status}. При авторизации произошла ошибка. Токен не передан или передан не в том формате`;
  } else if (err.status === 404) {
    return `${err.status}. Страница по указанному маршруту не найдена`;
  } else if (err.status === 409) {
    return `${err.status}. Пользователь с таким email уже существует`;
  } else {
    return `${err.status}. На сервере произошла ошибка`;
  }
}

export default errors