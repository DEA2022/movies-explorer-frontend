class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getBaseURL() {
    return this._baseUrl
  }

  getAllMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: 'GET',
    })
      .then(this._getResponseData);
  };
}

export const apiMovies = new Api({
  baseUrl: 'https://api.nomoreparties.co',
})
