import { NYTQueryParams } from 'src/types'

export const nytQueryBuilder = (params: NYTQueryParams): string => {
  const query = new URLSearchParams()

  query.append('api-key', import.meta.env.VITE_NEW_YORK_TIMES_KEY)

  if (params.q) query.append('q', params.q)
  if (params.fq) query.append('fq', params.fq)
  if (params.begin_date) query.append('begin_date', params.begin_date)
  if (params.end_date) query.append('end_date', params.end_date)
  if (params.sort) query.append('sort', params.sort)
  if (params.page !== undefined) query.append('page', params.page.toString())

  return query.toString()
}
