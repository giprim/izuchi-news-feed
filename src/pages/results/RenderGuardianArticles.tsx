import { Box, Heading } from "@chakra-ui/react"
import GuardianCard from "src/components/newsCards/guardian"
import { GuardianRootObject } from "src/types"

type props = { articles: GuardianRootObject['response']['results'] }
export const RenderGuardianArticles = ({ articles }: props) => {

  if (!articles.length) return <></>
  return (
    <Box py={6} >
      <Heading size={'md'} fontWeight={'bold'} color={'fg.warning'}>Guardian</Heading>
      <Box pt={2} spaceY={6}>
        {articles.map((article) =>
          <GuardianCard
            key={article.apiUrl}
            {...article}
          />)}
      </Box>
    </Box>
  )

}
