import { queryKeyParams } from 'src/types'
import { queryGuardianApi, queryNewsApi, queryNYTApi } from './queries'
import { buildGuardianStr, buildNewsAPIStr, buildNYTStr } from 'src/utils'

export const generalSearchHelper = async (params: queryKeyParams) => {
  const {
    q,
    author = [''],
    guardian = [''],
    newsApi = [''],
    category = [''],
    from,
    nyt = [''],
    to,
  } = params

  const newsApiResponse = await queryNewsApi({
    q: buildNewsAPIStr({ q, author: author[0] }),
    pageSize: 15,
    sources: category[0] ? '' : newsApi[0],
    category: category[0],
    from,
    to,
  })

  const guardianResponse = await queryGuardianApi({
    q: buildGuardianStr({
      q,
      source: guardian[0],
      category: category[0],
      author: author[0],
    }),
    fromDate: from,
    toDate: to,
    pageSize: 15,
    section: category[0] ?? 'search',
    orderBy: 'newest',
  })

  const nytResponse = await queryNYTApi({
    q,
    begin_date: from,
    end_date: to,
    fq: buildNYTStr(nyt[0], category[0]),
    sort: 'newest',
  })
  return {
    newsApiResponse,
    guardianResponse,
    nytResponse,
  }
}
