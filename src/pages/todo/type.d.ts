type updateWithTodoType = (updateTodo: updateTodosProps) => Promise<TodoDTOT>;
type deleteWithIdType = (deleteId: number) => Promise<boolean>;
type addWithTextType = (addTodoText: string) => Promise<TodoDTOT | undefined>;

interface GetTodoDataType {
  // initTodos: TodoDTOT[]
  resource: {
    todo: {
      read(): getTodosRes | undefined;
    };
  }
}

interface TodoViewProps extends ContainerProps {
  todoList: TodoDTOT[];
  todoFunctions: {
    updateWithTodo: updateWithTodoType
    deleteWithId: deleteWithIdType
    addWithText: addWithTextType
  }
}
interface TodoItemProps extends ChakraProps {
  todo: TodoDTOT
  updateWithTodo: updateWithTodoType
  deleteWithId: deleteWithIdType
}

type fetchTodoDataType = {
  todo: {read(): getTodosRes}
}