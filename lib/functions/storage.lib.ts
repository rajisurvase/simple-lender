import { GetServerSidePropsContext } from "next";
import nookies, { parseCookies, setCookie, destroyCookie } from "nookies";

/**
 * Check if the window object exists.
 * @returns A function that checks if the window is undefined.
 */
export function checkWindow() {
  return typeof window !== "undefined";
}

/**
 * It takes a key and a value, encrypts the value, and saves it in local storage
 * @param key - The key to store the data under.
 * @param value - The value to be encrypted.
 */
export function saveInLocalStorage(key: string, value: string) {
  if (checkWindow()) {
    // let encript_key = encryptData(key);
    // const encriptVal = encryptData(value);

    localStorage.setItem(key, value);
  }
}

/**
 * It gets the data from the local storage, decrypts it, and returns it
 * @param key - The key to store the data in local storage.
 * @returns the decrypted data from the local storage.
 */
export function getFromLocalStorage(key: string) {
  if (checkWindow()) {
    const getItem = localStorage.getItem(key);
    // console.log(getItem)

    if (getItem?.length) {
      // const __decryptData = decryptData(getItem);
      // console.log(_decryptData)

      return getItem;
    }

    return null;
  }

  return null;
}

/**
 * Simply omit context parameter.
 * @param {string} key - The key of the cookie.
 * @param {string} value - The value to be stored in the cookie.
 */
export function saveInCookiesClientSide(key: string, value: string) {
  // Simply omit context parameter.
  // Set
  setCookie(null, key, value, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/"
  });
}

/**
 * It gets the cookies from the context object, and then returns the value of the cookie with the key
 * that was passed in
 * @param {GetServerSidePropsContext} context - GetServerSidePropsContext
 * @param {string} key - The key of the cookie you want to get
 * @returns The value of the cookie with the key of the argument passed in.
 */
export function getItemFromCookiesServerSide(
  context: GetServerSidePropsContext,
  key: string
) {
  const cookies = nookies.get(context);

  if (cookies[key]) {
    return cookies[key];
  } else {
    return "";
  }
}

/**
 * It takes a key as an argument, parses the cookies, and returns the value of the cookie with the key
 * that was passed in
 * @param {string} key - The key of the cookie you want to get.
 * @returns The value of the cookie with the key that was passed in.
 */
export function getItemFromCookiesClientSide(key: string) {
  const cookies = parseCookies();

  return cookies[key];
}

/**
 * If the cookie exists, delete it.
 * @param {string} key - The name of the cookie to delete.
 */
export function deleteCookie(key: string) {
  destroyCookie(null, key);
}
