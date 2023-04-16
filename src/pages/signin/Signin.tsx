import { Button, Center, Container, Flex, Input, InputGroup, InputProps, InputRightElement, Text, TextProps, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { isValidEmailString, isValidPWString } from "../../utils/StringCheck"
import useValidInput from "../../hooks/useValidInput"
import { InfoOutlineIcon } from "@chakra-ui/icons"
import { basicMargin, emailInputPH, emailErrMsg, pwInputPH, pwErrMsg } from "../../constants/signinString"
import ErrorText from "../../components/ErrorText"
import LoginInput from "../../components/LoginInput"
import { postSignIn } from "../../api/axios/post"
import React from "react"
import { useNavigate } from "react-router-dom"
import { AxiosError, AxiosResponse } from "axios"
const Signin = () => {
  const [isShow, setIsShow] = useState(false)
  const navi = useNavigate()
  const { inputVal: emailVal, isInputValid: isEmailVal, handleOnchangeInputValid: handleOnchangeEmailVal } = useValidInput({ initialVal: "", validCheckFunction: isValidEmailString })
  const { inputVal: pwVal, isInputValid: isPwVal, handleOnchangeInputValid: handleOnchangePwval } = useValidInput({ initialVal: "", validCheckFunction: isValidPWString })
  const [loginErrorMsg, setLoginErrorMsg] = useState("")
  const handleShowOnclick = () => setIsShow(!isShow)
  const handleLoginOnclick = async () => {
    try {
      const postRes = await postSignIn({ email: emailVal, password: pwVal })
      if (postRes) {
        navi('/todo')
      } //로그인 성공
      else {
      } 
    } catch (error) {
      // 로그인 실패
      const { response } = error as unknown as AxiosError
      const { data } = response as AxiosResponse
      if (data?.message) {
        const { message } = data
        setLoginErrorMsg(message)
      }
    }
  }
  const isLoginDisabled = !isEmailVal || !isPwVal
  return (
    <>
      <Container width="sm">
        <Flex flexDir="column" align="center" justify="center">
          로그인 페이지 입니다.
            <LoginInput isInvalid={!isEmailVal} data-testid="email-input" value={emailVal} onChange={handleOnchangeEmailVal}
              placeholder={emailInputPH} />
            {!isEmailVal && <ErrorText errorMsg={emailErrMsg} />}
            <InputGroup size="md">
              <LoginInput pr="4.5rem" isInvalid={!isPwVal} value={pwVal} onChange={handleOnchangePwval} data-testid="password-input"
                placeholder={pwInputPH} type={isShow ? "text" : "password"} />
              <InputRightElement w="4.5rem" alignSelf="center" top="auto">
                <Button size="sm" h="1.75rem" onClick={handleShowOnclick}>
                  {isShow ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {!isPwVal && <ErrorText errorMsg={pwErrMsg} />}
            <Button isDisabled={isLoginDisabled} onClick={handleLoginOnclick} data-testid="signin-button" w="full">로그인</Button>
            {loginErrorMsg && <ErrorText errorMsg={loginErrorMsg}/>}
        </Flex>
      </Container>
    </>
  )
}

export default Signin