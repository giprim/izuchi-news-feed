import {
  GuardianQueryParams,
  GuardianRootObject,
  NewsAPIQueryParams,
  NewsApiRootObject,
  NewYorkTimesRootObject,
  NYTQueryParams,
} from 'src/types'
import {
  guardianApiInstance,
  newsApiInstance,
  nytApiInstance,
} from './baseAPIs'
import { guardianQueryBuilder } from './queryBuilders/guardian'
import { newsAPIQueryBuilder } from './queryBuilders/newsApi'
import { nytQueryBuilder } from './queryBuilders/nyt'

export const queryNewsApi = async (params: NewsAPIQueryParams) => {
  try {
    const target = params.category || !params.q ? 'top-headlines' : 'everything'
    const category = !params.q && !params.sources ? 'general' : params.category

    const { data } = await newsApiInstance.get<NewsApiRootObject>(
      `${target}?${newsAPIQueryBuilder({ ...params, category })}`
    )
    return data
  } catch (error) {
    console.log({ error })
    return null
  }
}

export const queryGuardianApi = async (params: GuardianQueryParams) => {
  try {
    const { data } = await guardianApiInstance.get<GuardianRootObject>(
      `${params.section}?${guardianQueryBuilder(params)}`
    )
    return data
  } catch (error) {
    console.log({ error })
    return null
  }
}

export const queryNYTApi = async (params: NYTQueryParams) => {
  try {
    const { data } = await nytApiInstance.get<NewYorkTimesRootObject>(
      `articlesearch.json?${nytQueryBuilder(params)}`
    )
    return data
  } catch (error) {
    console.log({ error })
    return null
  }
}
