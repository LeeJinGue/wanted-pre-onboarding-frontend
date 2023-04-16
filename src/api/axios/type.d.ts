// Todo 기본 타입
type TodoDTOT = {
  id: number,
  todo: string,
  isCompleted: boolean,
  userId: number  
}
// POST 관련 타입들
interface createTodosProps{
  todo: string
}
type createTodosRes = TodoDTOT
type postSignInUpProps = {
  email: string,
  password: string
}
type postSignInRes = {
  access_token:string
}
// GET 관련 타입
type getTodosRes = TodoDTOT[]
// PUT 관련 타입
type updateTodosProps = Omit<TodoDTOT, 'userId'>
type updateTodosRes = TodoDTOT
// DELETE 관련 타입
type deleteTodosProps = {
  id: number,
}