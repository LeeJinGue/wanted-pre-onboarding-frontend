import { Box, BoxProps, Text } from "@chakra-ui/react"
interface TitleProps extends BoxProps{
  title: string
}

const Title = ({title, ...props}:TitleProps) => {
  return (
    <Box w="30" h="20"  {...props}>
      <Text textColor="blue.300" fontSize="30pt" textStyle="bold">{title}</Text>
    </Box>
  )
}

export default Title