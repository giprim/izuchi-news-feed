import { Heading, Text, HStack, Link as ChakraLink, Separator, Box } from '@chakra-ui/react'
import { GuardianResult } from 'src/types'
import { Link } from 'react-router-dom'

const GuardianCard = (props: GuardianResult) => {
  return (
    <Box>
      <ChakraLink asChild>
        <Link to={`/article/guardian?id=${props.id}`}>
          <Heading size={'sm'} fontWeight={'bold'}>{props.webTitle}</Heading>
        </Link>
      </ChakraLink>
      <HStack gap={2} color={'gray.400'}>
        <Text textStyle={'sm'}>{new Date(props.webPublicationDate).toDateString()}</Text>
        <Separator orientation="vertical" height="4" />
        <Text textStyle={'sm'}>{props.pillarName}</Text>
        <Separator orientation="vertical" height="4" />
        <Text textStyle={'sm'}>{props.sectionName}</Text>
        <Separator orientation="vertical" height="4" />
        <Text textStyle={'sm'}>{props.type}</Text>
      </HStack>
    </Box>
  )
}

export default GuardianCard

