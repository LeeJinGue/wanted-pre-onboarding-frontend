import { Button, Container, Flex, Input } from "@chakra-ui/react"
import { useState } from "react"
import Title from "../../components/Title"
import TodoItem from "./TodoItem"
const TodoView = ({
  todoList,
  todoFunctions: {
    updateWithTodo, deleteWithId, addWithText,
  },
  ...props
}: TodoViewProps) => {
  const [newTodo, setNewTodo] = useState("")
  const handleAddTodo = async () => await addWithText(newTodo)
  return (<>
    <Container size="lg" {...props}>
      <Title title="TODO List" />
      <Flex flexDir="column">
        <Flex flexDir="row" alignItems="center">
          <Input mx="5px" data-testid="new-todo-input" type="text" size="xs" w="30"
            value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
          <Button data-testid="new-todo-add-button" size="xs" onClick={handleAddTodo}>추가</Button>
        </Flex>
        <Flex flexDir="column" alignItems="start">
          {todoList.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} updateWithTodo={updateWithTodo} deleteWithId={deleteWithId} />
          })}
        </Flex>
      </Flex>
    </Container>
  </>)
}
export default TodoView