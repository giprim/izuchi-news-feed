import { Icon } from "@chakra-ui/react"
import { Switch } from "./ui/switch"
import { FaMoon, FaSun } from "react-icons/fa"
import { useAppContext } from "src/hooks/useFilterContext"

const ThemeToggle = () => {
  const context = useAppContext()
  return (
    <Switch
      onCheckedChange={(e) => context?.setTheme(e.checked ? 'dark' : 'light')}
      colorPalette="blue"
      size="lg"
      trackLabel={{
        on: (
          <Icon color="yellow.400">
            <FaSun />
          </Icon>
        ),
        off: (
          <Icon color="gray.400">
            <FaMoon />
          </Icon>
        ),
      }}
    />
  )
}
export default ThemeToggle
