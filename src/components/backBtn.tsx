import { Button } from '@chakra-ui/react'
import { RiArrowLeftLine } from 'react-icons/ri'

const BackBtn = () => {
  return (
    <Button size={'xs'} variant={'subtle'} onClick={() => window.history.back()} ><RiArrowLeftLine />Back</Button>
  )
}

export default BackBtn