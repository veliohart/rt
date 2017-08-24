import config from '../config';

const UNAUTHORIZED = 401;
const SUCCESSFUL = 200;
const API = `${config.api.host}api`;

const getOptions = () => ({
  API: ''
});

const api = {
  fetch (
    method,
    url,
    body,
    options = getOptions()
  ) {
    return fetch(`${options.API}/${url}`, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }).then(res => {
      if (res.status === UNAUTHORIZED) {
        localStorage.clear();
      }
      if (res.status !== SUCCESSFUL) return Promise
        .reject(res.text()).then(err => err);
      return res.json();
    });
  },

  get (...args) {
    return this.fetch('GET', ...args);
  },

  post (...args) {
    return this.fetch('POST', ...args);
  },

  put (...args) {
    return this.fetch('PUT', ...args);
  },

  delete (...args) {
    return this.fetch('DELETE', ...args);
  }
};

export default api;
