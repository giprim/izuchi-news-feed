import { Box } from "@chakra-ui/react"
import Empty from "src/components/empty"
import { NewsApiRootObject, GuardianRootObject, NewYorkTimesRootObject } from "src/types"
import { RenderGuardianArticles } from "./RenderGuardianArticles"
import { RenderNewsAPIArticles } from "./RenderNewsAPIArticles"
import { RenderNYTArticles } from "./RenderNYTArticles"

type RenderResultsProps = {
  data?: {
    newsApiResponse: NewsApiRootObject | null,
    guardianResponse: GuardianRootObject | null
    nytResponse: NewYorkTimesRootObject | null
  }
}
const RenderResults = ({ data }: RenderResultsProps) => {
  if (!data?.guardianResponse?.response.results.length
    && !data?.nytResponse?.response.docs.length
  ) return <Empty />
  return (
    <Box>
      {data?.newsApiResponse && <RenderNewsAPIArticles articles={data?.newsApiResponse.articles} />}
      {data?.guardianResponse && <RenderGuardianArticles articles={data?.guardianResponse.response.results} />}
      {data?.nytResponse && <RenderNYTArticles articles={data.nytResponse.response.docs} />}
    </Box>
  )
}

export default RenderResults