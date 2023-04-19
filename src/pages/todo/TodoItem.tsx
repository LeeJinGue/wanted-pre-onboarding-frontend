import { Flex, Button, Input } from "@chakra-ui/react"
import { useState } from "react"

const TodoItem = ({ todo, updateWithTodo, deleteWithId, ...props }: TodoItemProps) => {
  const { isCompleted, id, todo: initTodoText } = todo
  const [isCheck, setIsCheck] = useState(isCompleted)
  const [isItemEdit, setIsItemEdit] = useState(false)
  const [todoText, setTodoText] = useState(initTodoText)
  const handleCheckBox = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedTodo = await updateWithTodo({ isCompleted: !isCheck, id, todo: todoText })
    setIsCheck(updatedTodo.isCompleted)
  }
  const handleDelBtn = async (id: number) => await deleteWithId(id)
  const handleEditBtn = () => setIsItemEdit(!isItemEdit)
  const handleSubmitBtn = async (updateTodo: updateTodosProps) => {
    setIsItemEdit(!isItemEdit)
    const updatedTodo = await updateWithTodo(updateTodo)
    setTodoText(updatedTodo.todo)
    setIsCheck(updatedTodo.isCompleted)
  }
  const handelCancelBtn = () => {
    setIsItemEdit(!isItemEdit)
    setTodoText(initTodoText)
  }
  const updateTodoProp: updateTodosProps = {
    id: todo.id,
    todo: todoText,
    isCompleted: isCheck,
  }
  return (
    <Flex alignItems="center" my="6px" px="30px" {...props}>
      <li key={todo.id}>
        <label>
          <input type="checkbox" value={isCheck.toString()} checked={isCheck} onChange={handleCheckBox} />
        </label>
        {!isItemEdit ?
          <>
            <span style={{ margin: "6px" }}>{todoText}</span>
            <Button size="xs" type="button" data-testid="modify-button" onClick={handleEditBtn}>수정</Button>
            <Button size="xs" type="button" data-testid="delete-button" onClick={() => handleDelBtn(todo.id)}>삭제</Button>
          </>
          :
          <>
            <Input mx="6px" px="5px" size="xs" w="30" type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
            <Button size="xs" type="button" data-testid="submit-button" onClick={() => handleSubmitBtn(updateTodoProp)}>제출</Button>
            <Button size="xs" type="button" data-testid="cancel-button" onClick={handelCancelBtn}>취소</Button>
          </>
        }
      </li>
    </Flex>
  )
}
export default TodoItem