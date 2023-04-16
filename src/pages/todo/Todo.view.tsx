import { Container, ContainerProps, Flex } from "@chakra-ui/react"
import { getAccessToken } from "../../utils/localStorage"
import { useNavigate } from "react-router-dom"
import { PATH } from "../../constants/path"
import { useEffect, useState } from "react"
import { getTodos } from "../../api/axios/get"
import React from "react"
import { fetchDataType } from "./fetchData"
interface TodoViewProps extends ContainerProps{
  todoData:fetchDataType
}
const TodoView = ({todoData}:TodoViewProps) => {
  const todoList = todoData.todo.read()
  // TODO를 받아옵니다.
  

  return (<>
      <Container size="sm" >
        <Flex flexDir="column">
          Todo 페이지입니다.
          {todoList.map((todo) => {
            return <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.isCompleted} />
                <span>{todo.todo}</span>
              </label>
            </li>
          })}
        </Flex>
      </Container>
  </>)
}
export default TodoView