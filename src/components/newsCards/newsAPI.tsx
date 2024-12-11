import { NewsApiArticle } from 'src/types'
import { Heading, Text, Link as ChakraLink, Separator, HStack, Box } from '@chakra-ui/react'


const NewsAPICard = (props: NewsApiArticle) => {
  if (props.url.toLowerCase() == 'https://removed.com') return null
  return (
    <Box>
      <ChakraLink href={props.url} target='_blank'>
        <Heading size={'sm'} fontWeight={'bold'}>{props.title}</Heading>
      </ChakraLink>
      <HStack gap={2} color={'gray.400'}>
        <Text textStyle={'sm'}>{new Date(props.publishedAt).toDateString()}</Text>
        <Separator orientation="vertical" height="4" />
        <Text textStyle={'sm'}>{props.source.name}</Text>
        <Separator orientation="vertical" height="4" />
        <Text textStyle={'sm'}>{props.author}</Text>
      </HStack>
    </Box>
  )
}
export default NewsAPICard

