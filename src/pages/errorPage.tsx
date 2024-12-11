import { Box, Button, Center, Heading, Text } from '@chakra-ui/react'
import { RiArrowLeftLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Center h={'70svh'} >
      <Box>
        <Heading size={'4xl'} pb={4}>Oops!</Heading>
        <Text pb={6}>Sorry, an unexpected error has occurred</Text>
        <Button asChild variant={'subtle'}>
          <Link to={'/'}><RiArrowLeftLine /> Go back home</Link>
        </Button>
      </Box>
    </Center>

  )
}

export default ErrorPage