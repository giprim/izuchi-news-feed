import { LoaderFunctionArgs } from 'react-router-dom'
import axios from 'axios'
import { ArticlePageProps, GuardianSingleItem } from './types'
type channel = 'guardian' | 'nyt' | 'newsApi'

export const articleLoader = async ({
  request,
  params,
}: LoaderFunctionArgs): Promise<ArticlePageProps | null> => {
  const channel = params.channel as channel
  const url = new URL(request.url)
  const id = url.searchParams.get('id')
  switch (channel) {
    case 'guardian': {
      const { data } = await axios.get<GuardianSingleItem>(
        `${import.meta.env.VITE_GUARDIAN_BASE_API}${id}?api-key=${
          import.meta.env.VITE_GUARDIAN_KEY
        }&show-fields=all`
      )
      const res = data.response.content
      return {
        body: res.fields.body,
        category: res.sectionName,
        date: new Date(res.webPublicationDate).toDateString(),
        thumbNail: res.fields.thumbnail,
        title: res.webTitle,
        author: res.fields.publication,
      }
    }
    case 'newsApi':
      window.location.replace(id!)
      return null

    default: {
      window.location.replace(id!)
      return null
    }
  }
}
