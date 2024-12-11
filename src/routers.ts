import { createElement } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Results from './pages/results'
import Article from './pages/article'
import ErrorPage from './pages/errorPage'
import AppLayout from './components/layout/Applayout'
import { articleLoader } from './articleLoader'
import ArticleSkeleton from './components/articleSkeleton'

const routers = createBrowserRouter([
  {
    path: '/',
    element: createElement(AppLayout),
    children: [
      {
        index: true,
        element: createElement(Results),
      },
      {
        path: ':search',
        element: createElement(Results),
      },
      {
        path: 'article/:channel',
        element: createElement(Article),
        loader: articleLoader,
        HydrateFallback: ArticleSkeleton,
      },
    ],
    errorElement: createElement(ErrorPage),
  },
])

export default routers
