
import { Skeleton, Stack, Box } from '@chakra-ui/react'

export const CardSkeleton = () => {
  return (
    <Box spaceY={8} py={6}>
      <Stack flex="1" justifyContent={'start'} placeSelf={'stretch'} >
        <Skeleton height="11" />
        <Skeleton height="3" width="80%" />
      </Stack>
      <Stack flex="1" justifyContent={'start'} placeSelf={'stretch'} >
        <Skeleton height="11" />
        <Skeleton height="3" width="80%" />
      </Stack>
      <Stack flex="1" justifyContent={'start'} placeSelf={'stretch'} >
        <Skeleton height="11" />
        <Skeleton height="3" width="80%" />
      </Stack>
    </Box>
  )
}