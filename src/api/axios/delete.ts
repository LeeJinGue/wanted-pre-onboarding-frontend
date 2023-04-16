import { getAccessToken } from "../../utils/localStorage"
import instance from "./axios"
export const deleteTodo = async (props:deleteTodosProps) => {
  const {id} = props
  const delURL = `todos/${id}`
  const delRes = await instance.delete(delURL, {headers:{Authorization: `Bearer ${getAccessToken()}`}})
  if(delRes.status === 204){
    return true
  }else{
    console.log("# deleteTodos Error:",delRes)
    return false
  }
}