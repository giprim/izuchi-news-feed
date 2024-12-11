import { z } from 'zod'

export type NewsApiRootObject = {
  status: string
  totalResults: number
  articles: NewsApiArticle[]
}

export type NewsApiArticle = {
  source: {
    id: string
    name: string
  }
  author: string
  content: string
  description: string
  publishedAt: string
  title: string
  url: string
  urlToImage: string
}

export type GuardianRootObject = {
  response: GuardianResponse
}

type GuardianResponse = {
  status: string
  userTier: string
  total: number
  startIndex: number
  pageSize: number
  currentPage: number
  pages: number
  orderBy: string
  results: GuardianResult[]
}

export type GuardianResult = {
  id: string
  type: string
  sectionId: string
  sectionName: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
  apiUrl: string
  fields: GuardianFields
  isHosted: boolean
  pillarId?: string
  pillarName?: string
}

export type GuardianFields = {
  headline: string
  standfirst: string
  trailText: string
  byline: string
  main: string
  body: string
  wordcount: string
  firstPublicationDate: string
  isInappropriateForSponsorship: string
  isPremoderated: string
  lastModified: string
  liveBloggingNow?: string
  productionOffice: string
  publication: string
  shortUrl: string
  shouldHideAdverts: string
  showInRelatedContent: string
  thumbnail: string
  legallySensitive: string
  lang: string
  isLive: string
  bodyText: string
  charCount: string
  shouldHideReaderRevenue: string
  showAffiliateLinks: string
  bylineHtml: string
  showTableOfContents?: string
  commentCloseDate?: string
  commentable?: string
  starRating?: string
  displayHint?: string
}

export type NewYorkTimesRootObject = {
  status: string
  copyright: string
  response: NewYorkTimesResponse
}

export type NewYorkTimesResponse = {
  docs: Doc[]
  meta: Meta
}

export type Meta = {
  hits: number
  offset: number
  time: number
}

export type Doc = {
  abstract: string
  web_url: string
  snippet: string
  lead_paragraph: string
  source: string
  multimedia: Multimedia[]
  headline: Headline
  keywords: Keyword[]
  pub_date: string
  document_type: string
  news_desk: string
  section_name: string
  subsection_name?: string
  byline: Byline
  type_of_material: string
  _id: string
  word_count: number
  uri: string
  print_section?: string
  print_page?: string
}

export type Byline = {
  original: string
  person: (Person | Person2 | Person3)[]
  organization: null | string
}

export type Person3 = {
  firstname: string
  middlename: null | string
  lastname: string
  qualifier: null
  title: null
  role: string
  organization: string
  rank: number
}

export type Person2 = {
  firstname: string
  middlename: null
  lastname: string
  qualifier: null
  title: null
  role: string
  organization: string
  rank: number
}

export type Person = {
  firstname: string
  middlename: string
  lastname: string
  qualifier: null
  title: null
  role: string
  organization: string
  rank: number
}

export type Keyword = {
  name: string
  value: string
  rank: number
  major: string
}

export type Headline = {
  main: string
  kicker: null | string
  content_kicker: null
  print_headline: null | string
  name: null
  seo: null
  sub: null
}

export type Multimedia = {
  rank: number
  subtype: string
  caption: null
  credit: null
  type: string
  url: string
  height: number
  width: number
  legacy: Legacy
  subType: string
  crop_name: string
}

export type Legacy = {
  xlarge?: string
  xlargewidth?: number
  xlargeheight?: number
  thumbnail?: string
  thumbnailwidth?: number
  thumbnailheight?: number
  widewidth?: number
  wideheight?: number
  wide?: string
}

export type GuardianSingleItem = {
  response: GuardianSingleItemResponse
}

export type GuardianSingleItemResponse = {
  status: string
  userTier: string
  total: number
  content: GuardianSingleItemContent
}

export type GuardianSingleItemContent = {
  id: string
  type: string
  sectionId: string
  sectionName: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
  apiUrl: string
  fields: GuardianSingleItemFields
  isHosted: boolean
  pillarId: string
  pillarName: string
}

export type GuardianSingleItemFields = {
  headline: string
  standfirst: string
  trailText: string
  byline: string
  main: string
  body: string
  wordcount: string
  firstPublicationDate: string
  isInappropriateForSponsorship: string
  isPremoderated: string
  lastModified: string
  liveBloggingNow: string
  productionOffice: string
  publication: string
  shortUrl: string
  shouldHideAdverts: string
  showInRelatedContent: string
  thumbnail: string
  legallySensitive: string
  lang: string
  isLive: string
  bodyText: string
  charCount: string
  shouldHideReaderRevenue: string
  showAffiliateLinks: string
  bylineHtml: string
  showTableOfContents: string
}

export type ArticlePageProps = {
  title: string
  thumbNail: string
  author?: string
  category: string
  date: string
  body: string
}

export type filterOptions = z.infer<typeof filterOptions>
export const filterOptions = z.object({
  newsApi: z.string().array().optional(),
  guardian: z.string().array().optional(),
  nyt: z.string().array().optional(),
  category: z.string().array().optional(),
  author: z.string().array().optional(),
  from: z.string().optional(),
  to: z.string().optional(),
})

export type queryKeyParams = {
  q: string
} & filterOptions

export type SourcesType = NewsApiSourceObj | GuardianSourceObj | NYTSourceObj

export type NewsApiSourceObj = {
  name: string
  sources: {
    id: string
    name: string
    description: string
    url: string
    category: string
    language: string
    country: string
  }[]
}

export type GuardianSourceObj = {
  name: string
  sources: {
    id: string
    path: string
    edition: string
    webTitle: string
    webUrl: string
    apiUrl: string
  }[]
}

export type NYTSourceObj = {
  name: string
  sources: {
    id: string
    label: string
  }[]
}

export type NYTQueryParams = {
  q?: string
  fq?: string
  begin_date?: string
  end_date?: string
  sort?: 'newest' | 'oldest' | 'relevance'
  page?: number
}

export type GuardianQueryParams = {
  q?: string
  section?: string
  tag?: string
  fromDate?: string
  toDate?: string
  page?: number
  pageSize?: number
  orderBy?: 'newest' | 'oldest' | 'relevance'
  showFields?: string
}

export type NewsAPIQueryParams = {
  q?: string
  sources?: string
  category?: string
  from?: string
  to?: string
  sortBy?: 'relevancy' | 'popularity' | 'publishedAt'
  pageSize?: number
  page?: number
}
