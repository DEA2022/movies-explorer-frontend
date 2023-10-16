class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(res);
    }
    return res.json();
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    })
      .then(this._getResponseData);
  };

  authorization(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    })
      .then(this._getResponseData)
  };

  getToken = (token) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(this._getResponseData)
  };

  getUserInfo(token) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'GET',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(this._getResponseData);
  };

  setUserInfo(data, token) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      })
    })
      .then(this._getResponseData);
  }

  getMovies(token) {
    return fetch(this._baseUrl + '/movies', {
      method: 'GET',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(this._getResponseData);
  };

  addSaveMovie(token, data) {
    return fetch(this._baseUrl + '/movies', {
      method: 'POST',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data)
    })
      .then(this._getResponseData);
  };

  deleteMovie(token, movieId) {
    return fetch(this._baseUrl + '/movies/' + movieId, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(this._getResponseData);
  };
}

export const mainApi = new Api({
  baseUrl: 'api.movies.danilova.nomoredomainsicu.ru',
  headers: {
    "Content-Type": "application/json",
  }
})
