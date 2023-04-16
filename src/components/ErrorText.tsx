import { InfoOutlineIcon } from "@chakra-ui/icons"
import { Text, TextProps, Container } from "@chakra-ui/react"

interface ErrorTextProps extends TextProps {
  errorMsg: string
}
const ErrorText = (props: ErrorTextProps) => (
  <Container>
    <Text textAlign="left" textColor="red.300">
      <InfoOutlineIcon mx="1" color="red.300" />
      {props.errorMsg}
    </Text>
  </Container>
)
export default ErrorText