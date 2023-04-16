import { Button, Center, Container, Flex, Input, InputGroup, InputProps, InputRightElement, Text, TextProps, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { isValidEmailString, isValidPWString } from "../../utils/StringCheck"
import useValidInput from "../../hooks/useValidInput"
import { InfoOutlineIcon } from "@chakra-ui/icons"
import { basicMargin, emailInputPH, emailErrMsg, pwInputPH, pwErrMsg } from "../../constants/signinString"
import LoginInput from "../../components/LoginInput"
import ErrorText from "../../components/ErrorText"
import { postSignIn, postSignUp } from "../../api/axios/post"
import React from "react"
import { useNavigate } from "react-router-dom"
import { AxiosError, AxiosResponse } from "axios"

const Signup = () => {
  const [isShow, setIsShow] = useState(false)
  const navi = useNavigate()
  const { inputVal: emailVal, isInputValid: isEmailVal, handleOnchangeInputValid: handleOnchangeEmailVal } = useValidInput({ initialVal: "", validCheckFunction: isValidEmailString })
  const { inputVal: pwVal, isInputValid: isPwVal, handleOnchangeInputValid: handleOnchangePwval } = useValidInput({ initialVal: "", validCheckFunction: isValidPWString })
  const [signupErrText, setSignupErrText] = useState("")
  const handleShowOnclick = () => setIsShow(!isShow)
  const handleSignupOnclick = async() => {
    try {
      const postRes = await postSignUp({ email: emailVal, password: pwVal })
      if (postRes) {
        navi('/signin')
      } //회원가입 성공
      else {
      } 
    } catch (error) {
      // 회원가입 실패
      const { response } = error as unknown as AxiosError
      const { data } = response as AxiosResponse
      if (data?.message) {
        const { message } = data
        setSignupErrText(message)
      }
    }
  }

  const isSignupDisabled = !isEmailVal || !isPwVal
  return (
    <>
      <Container width="sm">
        <Flex flexDir="column" align="center" justify="center">
          회원가입 페이지 입니다.
            <LoginInput isInvalid={!isEmailVal} data-testid="email-input" value={emailVal} onChange={handleOnchangeEmailVal}
              placeholder={emailInputPH} />
            {!isEmailVal && <ErrorText errorMsg={emailErrMsg} />}
            <InputGroup>
              <LoginInput isInvalid={!isPwVal} value={pwVal} onChange={handleOnchangePwval} data-testid="password-input"
                placeholder={pwInputPH} type={isShow ? "text" : "password"} />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowOnclick}>
                  {isShow ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {!isPwVal && <ErrorText errorMsg={pwErrMsg} />}
            <Button isDisabled={isSignupDisabled} onClick={handleSignupOnclick} data-testid="signup-button" w="full">회원가입</Button>
            {signupErrText && <ErrorText errorMsg={signupErrText} /> }
        </Flex>
      </Container>
    </>
  )
}

export default Signup