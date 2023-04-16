import { Input, InputProps } from "@chakra-ui/react"
import { basicMargin } from "../constants/signinString"

interface LoginInputProps extends InputProps {
  "data-testid": string,
}
const LoginInput = (props: LoginInputProps) =>
  <Input m={basicMargin} errorBorderColor="red.300"
    {...props}
  />
export default LoginInput