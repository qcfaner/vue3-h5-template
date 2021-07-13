import Cookies from 'js-cookie'

const TokenKey = 'iwrite-token'
// const expires = new Date(new Date().getTime() + 1 * 60 * 60 * 1000) // 1 天
// const expires = new Date(new Date().getTime() + 15 * 1000) // 1 天
const expires = 1 // 1 天

/**
 * @description token 专用方法。依次为：获取 token、设置 token、清除 token
 */
export const getToken = ()=> Cookies.get(TokenKey);
export const setToken = (token) => Cookies.set(TokenKey, token, { expires });
export const removeToken = () => Cookies.remove(TokenKey);

/**
 * @description 下面是通用 cookies 的操作方法，分别为：获取、设置、删除
 */
export const getCookie = (key) => Cookies.get(key);
export const setCookie = (key, value) => Cookies.set(key, value, { expires });
export const removeCookie = (key) => Cookies.remove(key);