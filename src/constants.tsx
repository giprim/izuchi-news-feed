import { filterOptions } from "./types"

export const FILTER_OPTIONS = 'filterOptions'
export const INITIAL_FILTER_VALUES: filterOptions = {
  to: '',
  from: '',
  newsApi: [],
  guardian: [],
  nyt: [],
  author: [],
  category: [],
}

export const categories = [
  "business",
  "technology",
  "education",
  "books",
  "culture",
  "environment",
  "fashion",
  "food",
  "games",
  "news",
  "politics",
  "science",
  "sports",
  "wellness",
  "weather",
]


export const authors = [
  // new york times
  'Maggie Haberman',
  'David Brooks',
  'Thomas L. Friedman',
  'Maureen Dowd',
  'Ezra Klein',
  'Jamelle Bouie',
  'Nicholas Kristof',
  'Michelle Goldberg',
  'Paul Krugman',
  'Frank Bruni',

  // the guardian
  'Jonathan Freedland',
  'Marina Hyde',
  'Polly Toynbee',
  'George Monbiot',
  'Aditya Chakrabortty',
  'Nesrine Malik',
  'Owen Jones',
  'Patrick Wintour',
  'Jessica Elgot',
  'Simon Jenkins',

  // NewsApi
  'Kara Swisher',
  'Jane Mayer',
  'Ronan Farrow',
  'Fareed Zakaria',
  'Glenn Greenwald',
  'Ezra Klein',
  'Andrew Ross Sorkin',
  'Anne Applebaum',
  'Elizabeth Kolbert',
  'Ta-Nehisi Coate',
]