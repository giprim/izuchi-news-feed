import { createContext } from 'react'
import { filterOptions } from 'src/types'

interface AppContextType {
  filters: filterOptions
  setFilters: (filters: filterOptions) => void
  theme: 'light' | 'dark'
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
}

export const AppContext = createContext<AppContextType | undefined>(undefined)
