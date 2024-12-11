import { Box, Heading } from "@chakra-ui/react"
import NewsAPICard from "src/components/newsCards/newsAPI"
import { NewsApiRootObject } from "src/types"

type RenderNewsAPIProps = { articles: NewsApiRootObject['articles'] }
export const RenderNewsAPIArticles = ({ articles }: RenderNewsAPIProps) => {
  if (!articles.length) return <></>
  return (
    <Box pt={6}>
      <Heading size={'md'} fontWeight={'bold'} color={'fg.warning'}>NewsApi</Heading>
      <Box pt={2} spaceY={6}>
        {articles.map((article) =>
          <NewsAPICard
            key={article.url}
            {...article}
          />)}
      </Box>
    </Box>
  )

}
