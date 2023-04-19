import { getTodos } from "../../api/axios/get";

export function fetchTodoData():fetchTodoDataType {
  let todoPromise = getTodos()
  return {
    todo: wrapPromise(todoPromise),
  };
}

function wrapPromise(promise: Promise<getTodosRes>) {
  let status = "pending";
  let result:getTodosRes;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") throw suspender
      else if (status === "error") throw result 
      else if (status === "success") return result
      return result
    }
  };
}