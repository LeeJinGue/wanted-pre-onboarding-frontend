import { useState } from "react"
import { deleteTodo } from "../api/axios/delete"
import { createTodos } from "../api/axios/post"
import { updateTodos } from "../api/axios/put"

const useTodoList = (initData: TodoDTOT[]) => {
  const [todoList, setTodoList] = useState<TodoDTOT[]>(() => initData)
  const updateWithTodo = async (updateTodo: updateTodosProps) => {
    const updateRes = await updateTodos(updateTodo)
    setTodoList(todoList.map((todoData) => {
      if (todoData.id === updateRes.id) return updateRes
      else return todoData
    }))
    return updateRes
  }
  const deleteWithId = async (deleteId: number) => {
    const isDelete = await deleteTodo({ id: deleteId })
    if(isDelete) setTodoList(todoList.filter((todoData) => todoData.id !== deleteId))
    return isDelete
  }
  const addWithText = async (addTodoText: string) => {
    const createRes = await createTodos({ todo: addTodoText });
    if (createRes) {
      setTodoList(todoList.concat(createRes));
    }
    return createRes
  }
  return {todoList, updateWithTodo, deleteWithId, addWithText}
}

export default useTodoList