import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/path";
import { getAccessToken } from "../../utils/localStorage";
import TodoView from "./Todo.view";
import useTodoList from "../../hooks/useTodoList";
import { fetchTodoData } from "./fetchTodoData";
function TodoData() {
  const navi = useNavigate()
  const [accessToken, setAccessToken] = useState(getAccessToken())
  const [resource, setResource] = useState<fetchTodoDataType>();
  useEffect(() => {
    if (!accessToken) navi(PATH.SIGNIN) 
    else setResource(fetchTodoData())
  }, [accessToken])
  return (
    <>
      {accessToken && resource && <GetTodoData resource={resource} />}
    </>
  );
}
function GetTodoData({ resource }: GetTodoDataType) {
  const initTodos = resource.todo.read()
  const { todoList, ...todoFunctions } = useTodoList(initTodos!)
  return (
    <TodoView todoList={todoList} todoFunctions={todoFunctions} />
  )
}


export default TodoData;