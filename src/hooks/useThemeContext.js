import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const useThemeContext = () => {
  const theme = useContext(ThemeContext)

  if (theme === undefined) {
    throw new Error('Theme context in undefined')
  }

  return theme
}

export default useThemeContext