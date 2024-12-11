import { useContext } from 'react'
import { AppContext } from 'src/context/appContext'

export const useAppContext = () => useContext(AppContext)
