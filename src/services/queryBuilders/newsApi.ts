import { NewsAPIQueryParams } from 'src/types'

export const newsAPIQueryBuilder = (params: NewsAPIQueryParams): string => {
  const query = new URLSearchParams()

  query.append('apiKey', import.meta.env.VITE_NEWS_API_ORG_KEY)

  if (params.q) query.append('q', params.q)
  if (params.sources) query.append('sources', params.sources)
  if (params.category) query.append('category', params.category)
  if (params.from) query.append('from', params.from)
  if (params.to) query.append('to', params.to)
  if (params.sortBy) query.append('sortBy', params.sortBy)
  if (params.pageSize !== undefined)
    query.append('pageSize', params.pageSize.toString())
  if (params.page !== undefined) query.append('page', params.page.toString())

  return query.toString()
}
