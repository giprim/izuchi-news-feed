import { HStack, Input } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
import { InputGroup } from "./ui/input-group"

type Props = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  ref: React.RefObject<HTMLInputElement>
  value: string
}

const SearchBar = (props: Props) => {
  return (
    <HStack gap="10" width={{ base: "full" }} pb={4}>
      <InputGroup
        flex="1"
        startElement={<LuSearch />}
      >
        <Input ref={props.ref} value={props.value} onChange={props.handleChange} placeholder="Press Enter to search..." size={'lg'} />
      </InputGroup>
    </HStack>
  )
}

export default SearchBar
