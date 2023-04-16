import { AxiosResponse } from "axios"
import { getAccessToken } from "../../utils/localStorage"
import instance from "./axios"
export const updateTodos = async (props:updateTodosProps) => {
  const {id,todo, isCompleted} = props
  const putURL = `todos/${id}`
  const putRes = await instance.put<updateTodosProps, AxiosResponse<updateTodosRes>> (putURL, {todo, isCompleted}, {headers:{Authorization: `Bearer ${getAccessToken()}`}})
  if(putRes.status === 200){
    // 업데이트 성공 시 성공한 결과를 return 합니다.
    return putRes.data
  }else{
    console.log("# updateTodos Error:",putRes)
  }
}