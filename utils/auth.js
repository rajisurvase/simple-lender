import { getCookieStorage, removeCookieStorage } from "./storage";

/**
 * @description auth guard
 */
export const checkAuth = {
    isAuthenticated: getCookieStorage("token") !== null ? true : false,
    authenticate(cb) {
        this.isAuthenticated = true
        console.log(this.isAuthenticated);
        setTimeout(cb, 100)
    },
    signout(cb) {
        removeCookieStorage('token');
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}