import { useForm } from 'react-hook-form'
import { useCallback, useEffect, useRef } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  authors,
  categories,
  FILTER_OPTIONS,
  INITIAL_FILTER_VALUES,
} from 'src/constants'
import newsApiSources from 'src/sources/newsApiSources.json'
import guardianSources from 'src/sources/guardianSources.json'
import nytSources from 'src/sources/nytSources.json'
import { filterOptions, SourcesType } from 'src/types'
import { generateOptions, generateSourceOptions } from 'src/utils'
import { useAppContext } from './useFilterContext'

export const useFilter = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const context = useAppContext()
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { isDirty },
  } = useForm<filterOptions>({
    resolver: zodResolver(filterOptions),
    defaultValues: {
      author: [],
      category: [],
      guardian: [],
      newsApi: [],
      nyt: [],
      to: '',
      from: '',
    },
  })

  const submit = handleSubmit((options: filterOptions) => {
    localStorage.setItem(FILTER_OPTIONS, JSON.stringify(options))
    context?.setFilters(options)
    console.log({ options })
  })

  const clearPreferences = useCallback(() => {
    if (!isDirty) return
    localStorage.removeItem(FILTER_OPTIONS)
    reset()
    context?.setFilters(INITIAL_FILTER_VALUES)
  }, [context, isDirty, reset])

  const newsApiSourcesToObj: SourcesType = newsApiSources
  const guardianSourcesToObj: SourcesType = guardianSources
  const nytSourcesToObj: SourcesType = nytSources

  const authors_ = generateOptions(authors)
  const newsApiSources_ = generateSourceOptions(newsApiSourcesToObj)
  const guardianSources_ = generateSourceOptions(guardianSourcesToObj)
  const nytSources_ = generateSourceOptions(nytSourcesToObj)
  const categories_ = generateOptions(categories)

  useEffect(() => {
    setValue('author', context?.filters.author)
    setValue('category', context?.filters.category)
    setValue('newsApi', context?.filters.newsApi)
    setValue('guardian', context?.filters.guardian)
    setValue('nyt', context?.filters.nyt)
    setValue('from', context?.filters.from)
    setValue('to', context?.filters.to)
  }, [
    context?.filters.author,
    context?.filters.category,
    context?.filters.from,
    context?.filters.guardian,
    context?.filters.newsApi,
    context?.filters.nyt,
    context?.filters.to,
    setValue,
  ])

  return {
    clearPreferences,
    contentRef,
    submit,
    register,
    isDirty,
    control,
    authors_,
    newsApiSources_,
    guardianSources_,
    categories_,
    nytSources_,
  }
}
