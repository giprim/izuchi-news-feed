import { useEffect, useRef, useState } from 'react'
import { z } from 'zod'
import { useQuery } from '@tanstack/react-query'
import { generalSearchHelper } from 'src/services/queryHelper'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppContext } from './useFilterContext'
import { queryKeyParams } from 'src/types'
import { useDebounce } from './useDebounce'

export const useSearch = () => {
  const [value, setValue] = useState('')
  const params = useParams()
  const ref = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const context = useAppContext()
  const debouncedValue = useDebounce(value, 1000)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const value = event.target.value
    if (z.string().safeParse(value).success) setValue(value)
    navigate(`/${value}`)
  }

  useEffect(() => {
    if (params) setValue(params.search!)
  }, [params])

  const { data, isLoading } = useQuery({
    queryKey: [
      'search',
      { q: debouncedValue, ...context?.filters } as queryKeyParams,
    ],
    queryFn: ({ queryKey }) =>
      generalSearchHelper(queryKey[1] as queryKeyParams),
  })

  return {
    data,
    isLoading,
    handleChange,
    ref,
    value,
  }
}
