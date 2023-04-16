import { Container, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/path";
import { getAccessToken } from "../../utils/localStorage";
import TodoView from "./Todo.view";
import { getTodos } from "../../api/axios/get";
import fetchData from "./fetchData";

function TodoData() {
  const navi = useNavigate()
  const [accessToken, setAccessToken] = useState(getAccessToken())
  useEffect(() => {
    if (!accessToken) {
      navi(PATH.SIGNIN)
    }
  }, [accessToken])
  return (
    <React.Suspense fallback={<h2>데이터 로딩중</h2>}>
      <TodoView todoData={fetchData()} />        
    </React.Suspense>
  );
}

export default TodoData;