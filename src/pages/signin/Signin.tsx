import { postSignIn } from "../../api/axios/post"
import { PATH } from "../../constants/path"
import LoginOrSignUp from "../../components/LoginOrSignup"
const Signin = () => {
  return <LoginOrSignUp title={"LOGIN"} postFunction={postSignIn} nextPath={PATH.TODO} buttonTestId={"signin-button"} buttonText={"로그인"} />
}

export default Signin