const AUTH_TOKEN = 'dabatech_ui_token';

export const setTokenWithExpiry = (value) => {
  const CURRENT_DATE = new Date();

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value,
    expiry: CURRENT_DATE.getTime() + 12 * 60 * 60 * 1000,
  };
  localStorage.setItem(AUTH_TOKEN, JSON.stringify(item));
};

export const getTokenWithExpiry = () => {
  const GET_AUTH_TOKEN = localStorage.getItem(AUTH_TOKEN);

  if (!GET_AUTH_TOKEN) {
    return null;
  }

  const item = JSON.parse(GET_AUTH_TOKEN);
  const CURRENT_DATE = new Date();

  // compare the expiry time of the item with the current time
  if (CURRENT_DATE.getTime() > new Date(item.expiry)) {
    // If the item is expired, delete the AUTH TOKEN from storage
    // and return null
    localStorage.removeItem(AUTH_TOKEN);
    return null;
  }

  return item.value;
};

export const clearToken = () => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = '/login';
};
