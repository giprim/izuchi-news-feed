
import { Box, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Doc } from 'src/types'

import { Heading, Text, Link as ChakraLink, Separator } from '@chakra-ui/react'

const NYTCard = (props: Doc) => {

  return (
    <Box>
      <ChakraLink asChild>
        <Link to={`article/nyt?id=${props.web_url}`}>
          <Heading size={'sm'} fontWeight={'bold'}>{props.headline.main}</Heading>
        </Link>
      </ChakraLink>
      <HStack gap={2} flexWrap={'wrap'} color={'gray.400'}>
        <Text textStyle={'sm'}>{new Date(props.pub_date).toDateString()}</Text>
        <Separator orientation="vertical" height="4" />
        <Text textStyle={'sm'}>{props.document_type}</Text>
        <Separator orientation="vertical" height="4" />
        <Text textStyle={'sm'}>{props.type_of_material}</Text>
        {props.byline.original && <>
          <Separator orientation="vertical" height="4" />
          <Text textStyle={'sm'}>{props.byline.original}</Text>
        </>}
      </HStack>
    </Box>
  )
}

export default NYTCard
