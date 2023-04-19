import { postSignUp } from "../../api/axios/post"
import { PATH } from "../../constants/path"
import LoginOrSignUp from "../../components/LoginOrSignup"

const Signup = () => {
  return <LoginOrSignUp title={"SIGNUP"} postFunction={postSignUp} nextPath={PATH.SIGNIN} buttonTestId={"signup-button"} buttonText={"회원가입"} />
}
export default Signup