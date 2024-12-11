
import { Link } from 'react-router-dom'
import { NewsApiArticle } from 'src/types'
import { Heading, Text, Link as ChakraLink, Separator, HStack, Box } from '@chakra-ui/react'


const NewsAPICard = (props: NewsApiArticle) => {
  if (props.url.toLowerCase() == 'https://removed.com') return null
  return (
    <Box>
      <ChakraLink asChild>
        <Link to={`article/newsApi?id=${props.url}`}>
          <Heading size={'sm'} fontWeight={'bold'}>{props.title}</Heading>
        </Link>
      </ChakraLink>
      <HStack gap={2} color={'gray.400'}>
        <Text textStyle={'sm'}>{new Date(props.publishedAt).toDateString()}</Text>
        <Separator orientation="vertical" height="4" />
        <Text textStyle={'sm'}>{props.source.name}</Text>
        <Separator orientation="vertical" height="4" />
        <Text textStyle={'sm'}>{props.author}</Text>
      </HStack>
      {/* <Text textStyle={'sm'} truncate>{props.content}</Text> */}
    </Box>
  )
}
export default NewsAPICard

