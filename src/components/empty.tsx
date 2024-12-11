import { Center, Box, Heading, Text } from "@chakra-ui/react"

const Empty = () => {
  return (
    <Center h={'40svh'}>
      <Box p={4} rounded={'lg'} bgColor={'gray.50'}>
        <Heading size={'2xl'} textTransform={'uppercase'} pb={3}>Not found</Heading>
        <Text>Could not find results related the search and filters </Text>
      </Box>
    </Center>
  )
}

export default Empty