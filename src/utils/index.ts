import { createListCollection } from '@chakra-ui/react'
import {
  GuardianSourceObj,
  NewsApiSourceObj,
  NYTSourceObj,
  SourcesType,
} from 'src/types'

export const generateOptions = (list: string[]) => {
  const options = list.map((item) => ({ label: item, value: item }))
  return createListCollection({ items: options })
}

export const generateSourceOptions = (data: SourcesType) => {
  let items: {
    label: string
    value: string
  }[] = []
  if (isGuardian(data)) {
    items = data.sources.map((item) => ({
      label: item.edition,
      value: item.id,
    }))
  }
  if (isNewsAPI(data)) {
    items = data.sources.map((item) => ({
      label: item.name,
      value: item.id,
    }))
  }
  if (isNYT(data)) {
    items = data.sources.map((item) => ({
      label: item.label,
      value: item.id,
    }))
  }
  return createListCollection({ items })
}

function isGuardian(source: SourcesType): source is GuardianSourceObj {
  return source.name === 'guardian'
}
function isNewsAPI(source: SourcesType): source is NewsApiSourceObj {
  return source.name === 'newsApi'
}
function isNYT(source: SourcesType): source is NYTSourceObj {
  return source.name === 'nyt'
}

export const buildNYTStr = (source: string, category: string) => {
  if (category && source)
    return `source:(${source}) AND section_name:(${category})`
  if (source) return `source:(${source})`
  if (category) return `news_desk:(${category})`
}

export type StringBuilderParams = {
  q: string
  source?: string
  category?: string
  author?: string
}
export const buildGuardianStr = ({
  q,
  author,
  category,
  source,
}: StringBuilderParams) => {
  if (category && source && q && author)
    return `${q} AND ${source} AND ${category} AND ${author}`
  if (source && q) return `${q} AND ${source}`
  if (author && q) return `${q} AND ${author}`
  if (category && q) return `${q} AND ${category}`
  return q
}
export const buildNewsAPIStr = ({ q, author }: StringBuilderParams) => {
  if (q && author) return `${q} AND ${author}`
  return q
}
