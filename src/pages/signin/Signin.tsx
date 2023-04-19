import { Button, Center, Container, Flex, Input, InputGroup, InputProps, InputRightElement, Text, TextProps, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
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
import { PATH } from "../../constants/path"
import { getAccessToken } from "../../utils/localStorage"
import Title from "../../components/Title"
import LoginOrSignUp from "../../components/LoginOrSignup"
const Signin = () => {
  return <LoginOrSignUp title={"LOGIN"} postFunction={postSignIn} nextPath={PATH.TODO} buttonTestId={"signin-button"} buttonText={"로그인"} />
}

export default Signin