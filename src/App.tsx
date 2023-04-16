import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signin from "./pages/signin"
import Signup from "./pages/signup"
import Todo from "./pages/todo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <h1>헤더입니다</h1>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h3>페이지가 존재하지 않습니다.</h3>} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
