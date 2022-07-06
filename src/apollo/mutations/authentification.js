export const LOGIN = (login) =>
  fetch(`${process.env.REACT_APP_API_AUTH_URL}/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(login),
  })
    .then((response) => response.json())
    .catch((err) => err);

export const REGISTER = (register) =>
  fetch(`${process.env.REACT_APP_API_AUTH_URL}/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(register),
  })
    .then((response) => response.json())
    .catch((err) => err);

export const VALIDATE_USER = () =>
  fetch(`${process.env.REACT_APP_API_AUTH_URL}/validateUser`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: localStorage.getItem('validation'),
  })
    .then(() => localStorage.clear('validation'))
    .catch((err) => err);

export const SPECIAL_LOGIN = (login) =>
  fetch(`${process.env.REACT_APP_API_AUTH_URL}/special-login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(login),
  })
    .then((response) => response.json())
    .catch((err) => err);

export const FORGOT_PASSWORD = (data) =>
  fetch(`${process.env.REACT_APP_API_AUTH_URL}/reset-password`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => err);

export const CHANGE_PASSWORD = (data) =>
  fetch(`${process.env.REACT_APP_API_AUTH_URL}/change-password`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => err);
