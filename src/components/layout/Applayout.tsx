import { Box, Container, Link, Text } from '@chakra-ui/react'
import { Outlet, } from 'react-router-dom'
import ThemeToggle from '../themeToggle'

const AppLayout = () => {
  return (
    <Container p={4} maxW={{ lg: '3/6' }}>
      <Box pb={4} display={'flex'} justifyContent={'space-between'}>
        <Text color={'bg.inverted'} fontWeight={'bold'}>Izuchi's Feed</Text>
        <ThemeToggle />
      </Box>
      <Outlet />
      <Link target='_blank' href='https://www.linkedin.com/in/izuchi-ngozi-15202119a' textStyle={'xs'} color={'teal.700'}>@Izuchi Ngozi</Link>
    </Container>
  )
}

export default AppLayout