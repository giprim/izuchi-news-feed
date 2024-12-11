import { Box, Heading } from "@chakra-ui/react"
import NYTCard from "src/components/newsCards/nyt"
import { NewYorkTimesResponse } from "src/types"

type RenderNYTProps = { articles: NewYorkTimesResponse['docs'] }
export const RenderNYTArticles = ({ articles }: RenderNYTProps) => {
  if (!articles.length) return <></>
  return (
    <Box py={6}>
      <Heading size={'md'} fontWeight={'bold'} color={'fg.warning'}>New York Times</Heading>
      <Box pt={2} spaceY={6}>
        {articles.map((article) =>
          <NYTCard
            key={article.web_url}
            {...article}
          />)}
      </Box>
    </Box>
  )

}
