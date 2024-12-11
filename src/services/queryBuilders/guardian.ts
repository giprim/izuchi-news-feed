import { GuardianQueryParams } from 'src/types'

export const guardianQueryBuilder = (params: GuardianQueryParams): string => {
  const query = new URLSearchParams()
  query.append('api-key', import.meta.env.VITE_GUARDIAN_KEY)
  query.append('show-fields', 'all')

  if (params.q) query.append('q', params.q)
  if (params.tag) query.append('tag', params.tag)
  if (params.fromDate) query.append('from-date', params.fromDate)
  if (params.toDate) query.append('to-date', params.toDate)
  if (params.page !== undefined) query.append('page', params.page.toString())
  if (params.pageSize !== undefined)
    query.append('page-size', params.pageSize.toString())
  if (params.orderBy) query.append('order-by', params.orderBy)

  return query.toString()
}
