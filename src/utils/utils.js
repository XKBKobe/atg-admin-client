import Cookies from 'js-cookie'


const loginToken = 'LOGIN_TOKEN'


export function setToken(token) {
  return Cookies.set(loginToken, token)
}

export function getToken() {
  return Cookies.get(loginToken)
}
