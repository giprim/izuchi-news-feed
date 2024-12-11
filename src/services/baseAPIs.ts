import axios from 'axios'

export const newsApiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_NEWS_API_ORG_BASE_API}`,
})

export const guardianApiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_GUARDIAN_BASE_API}`,
})

export const nytApiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_NEW_YORK_TIMES_API}`,
})
