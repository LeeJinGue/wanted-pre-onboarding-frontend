import { getTodos } from "../../api/axios/get";

function fetchTodos() {
  let todo:getTodosRes | null = null;
  const suspender = getTodos()
    .then((data) => {
      todo = data.data;
      console.log("# todo:",todo)
    })
    .catch((error) => console.log("# fetchTodos error:",error))
  return {
    read() {
      if (!todo) {
        throw suspender;
      } else {
        return todo;
      }
    }
  };
}
export type fetchDataType = {
  todo: {
    read(): getTodosRes
  }
}
function fetchData(): fetchDataType {
  return {
    todo: fetchTodos(),
  };
}

export default fetchData;