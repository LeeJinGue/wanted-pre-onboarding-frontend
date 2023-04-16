import { useState } from "react"
interface useValidInputProps{
  initialVal: string, 
  validCheckFunction: (value:string) => boolean 
}
const useValidInput = ({initialVal, validCheckFunction}: useValidInputProps) => {
  const [inputVal, setInputVal] = useState(initialVal)
  const [isInputValid, setIsInputValid] = useState(false)
  const handleOnchangeInputValid = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(event.target.value)
    setIsInputValid(validCheckFunction(event.target.value))
  }
  return {inputVal, isInputValid, handleOnchangeInputValid}

}
export default useValidInput