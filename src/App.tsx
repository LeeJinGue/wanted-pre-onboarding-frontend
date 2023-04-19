import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signin from "./pages/signin"
import Signup from "./pages/signup"
import Todo from "./pages/todo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
