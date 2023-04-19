import { Container, Flex, InputGroup, InputRightElement, Button } from "@chakra-ui/react"
import { AxiosError, AxiosResponse } from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { PATH } from "../constants/path"
import { emailInputPH, emailErrMsg, pwInputPH, pwErrMsg } from "../constants/signinString"
import useValidInput from "../hooks/useValidInput"
import { isValidEmailString, isValidPWString } from "../utils/StringCheck"
import { getAccessToken } from "../utils/localStorage"
import ErrorText from "./ErrorText"
import LoginInput from "./LoginInput"
import Title from "./Title"
interface LoginOrSignUpProps{
  title: string,
  postFunction: (props: postSignInUpProps) => Promise<true | string>
  nextPath: string,
  buttonTestId: string,
  buttonText: string,
}
const LoginOrSignUp = ({title, postFunction,nextPath,buttonTestId,buttonText }:LoginOrSignUpProps) => {
  const [isShow, setIsShow] = useState(false)
  const navi = useNavigate()
  const [accessToken, setAccessToken] = useState(getAccessToken())
  useEffect(() => {
    if (accessToken) {
      navi(PATH.TODO)
    }
  }, [accessToken])
  const { inputVal: emailVal, isInputValid: isEmailVal, handleOnchangeInputValid: handleOnchangeEmailVal } = useValidInput({ initialVal: "", validCheckFunction: isValidEmailString })
  const { inputVal: pwVal, isInputValid: isPwVal, handleOnchangeInputValid: handleOnchangePwval } = useValidInput({ initialVal: "", validCheckFunction: isValidPWString })
  const [errotText, setErrorText] = useState("")
  const handleShowOnclick = () => setIsShow(!isShow)
  const handleButtonOnclick = async () => {
    try {
      const postRes = await postFunction({ email: emailVal, password: pwVal })
      if (postRes) {
        navi(nextPath)
      } //회원가입 성공
      else {
      }
    } catch (error) {
      // 회원가입 실패
      const { response } = error as unknown as AxiosError
      const { data } = response as AxiosResponse
      if (data?.message) {
        const { message } = data
        setErrorText(message)
      }
    }
  }

  const isButtonDisabled = !isEmailVal || !isPwVal
  return (
    <Container width="sm">
      <Flex flexDir="column" align="center" justify="center">
        <Title title={title}></Title>
        <LoginInput isInvalid={!isEmailVal} data-testid="email-input" value={emailVal} onChange={handleOnchangeEmailVal}
          placeholder={emailInputPH} />
        {!isEmailVal && <ErrorText errorMsg={emailErrMsg} />}
        <InputGroup>
          <LoginInput isInvalid={!isPwVal} value={pwVal} onChange={handleOnchangePwval} data-testid="password-input"
            placeholder={pwInputPH} type={isShow ? "text" : "password"} />
          <InputRightElement width="4.5rem" alignSelf="center" top="auto">
            <Button h="1.75rem" size="sm" onClick={handleShowOnclick}>
              {isShow ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {!isPwVal && <ErrorText errorMsg={pwErrMsg} />}
        <Button isDisabled={isButtonDisabled} onClick={handleButtonOnclick} data-testid={buttonTestId} w="full">{buttonText}</Button>
        {errotText && <ErrorText errorMsg={errotText} />}
      </Flex>
    </Container>
  )
}

export default LoginOrSignUp