import { AxiosResponse } from "axios"
import { getAccessToken } from "../../utils/localStorage"
import instance from "./axios"

export const getTodos = async () => {
  const getURL = 'todos'
  const getRes = await instance.get<any, AxiosResponse<getTodosRes>>(getURL,{headers: {Authorization: `Bearer ${getAccessToken()}`}})
  if(getRes.status === 200){
    // 조회 성공시 성공한 데이터를 return합니다.
    return getRes.data
  }else{
    console.log("# getTodos 에러:",getRes)
  }
}
