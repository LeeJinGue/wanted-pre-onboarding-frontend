import { AxiosError, AxiosResponse } from "axios"
import { getAccessToken, setAccessToken } from "../../utils/localStorage"
import instance from "./axios"
export const postSignUp = async (props:postSignInUpProps) => {
  const postURL = 'auth/signup'
  const postRes = await instance.post<postSignInUpProps, AxiosResponse<string, AxiosError>>(postURL, {...props})
  if(postRes.status === 201){
    // 회원가입 성공시 true를 return합니다.
    return true
  } else {
    console.log("# postSignUp Error:",postRes)
    // 실패시 오류메세지를 return
    return postRes
  }
}
export const postSignIn = async (props:postSignInUpProps) => {
  const postURL = 'auth/signin'
  const postRes = await instance.post<postSignInUpProps, AxiosResponse<postSignInRes>>(postURL, {...props})
  if(postRes.status === 200){
    // 로그인 성공시 토큰을 LocalStorage에 저장합니다.
    setAccessToken(postRes.data.access_token)
    return true
  }else {
    console.log("# postSignIn Error:",postRes)
    return false
  }
}

export const createTodos = async (props:createTodosProps) => {
  const postURL = 'todos'
  const postRes = await instance.post<createTodosProps, AxiosResponse<createTodosRes>>(postURL, {...props}, {headers: {Authorization: `Bearer ${getAccessToken()}`}})
  if(postRes.status === 201){
    return postRes.data
  }else{
    console.log("# createTodos Error:",postRes)
  }
}
