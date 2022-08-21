import Cookies from 'js-cookie'
export const setCookieStorage = (sKey, data,expires=30) =>
Cookies.set(sKey, data,{ expires});

export const getCookieStorage = (sKey) =>
Cookies.get(sKey);

export const removeCookieStorage = (sKey) => Cookies.remove(sKey);



export const setLocaleStorage = (sKey, data) =>
  localStorage.setItem(sKey, data);
export const getLocalStorage = (sKey, data) =>
  sessionStorage.getItem(sKey);
export const removeLocalStorage = (sKey) => localStorage.removeItem(sKey);

export const setSessionStorage = (sKey, data) =>
  sessionStorage.setItem(sKey, data);
export const getSessionStorage = (sKey, data) =>
  sessionStorage.getItem(sKey);
export const removeSessionStorage = (sKey) => sessionStorage.removeItem(sKey);

