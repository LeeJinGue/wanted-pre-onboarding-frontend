const accessTokenKey = 'access-token'
export const getAccessToken = () => window.localStorage.getItem(accessTokenKey)
export const setAccessToken = (token:string) => window.localStorage.setItem(accessTokenKey, token)